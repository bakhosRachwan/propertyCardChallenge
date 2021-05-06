import { Container, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import TenantItem from "../../comonents/TenantItem";
import firebase from "../../service/firebase";

const Tenant = () => {
  const ref = firebase.firestore().collection("users");
  const [items, setItems] = useState([]);
  const {id} = useParams()
  useEffect(
    () => {
      ref
        .doc(id)
        .get()
        .then((querySnapshot) => {
          const items = [];
          querySnapshot.data().record.forEach((doc) => {
            items.push(doc);
          });
          setItems(items);
        });
    },
    //eslint-disable-next-line
    []
  );
  return (
    <Container>
      <Typography variant="h4">Tenant Page!</Typography>
      {items === []? <Typography>No Tenancy Records!!</Typography> :items.map(element => <TenantItem key={element.tenantId} item={element} />)}
    </Container>
  );
};

export default Tenant;
