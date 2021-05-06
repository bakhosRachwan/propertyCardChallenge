import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import firebase from "../service/firebase";
// import TenantItem from "./TenantItem";
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    layout: {
      margin:theme.spacing(2),
      boxShadow: "0px 7px 8px -2px rgba(0,0,0,0.25)",
      padding: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        width: 300,
        marginLeft: "auto",
        marginRight: "auto",
      },
      [theme.breakpoints.up("lg")]: {
        width: 850,
  },
    },
    cont: {
        height: 400,
        width: "auto",
    }
  }));

const TenantNames = () => {
  const classes = useStyles();
  const ref = firebase.firestore().collection("users");
  const [items, setItems] = useState([]);
  const columns = [
    { field: 'id', headerName: 'ID', width: 280 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'email',
      headerName: 'Email',
      width: 220,
    },
    
  ];

  useEffect(
    () => {
      ref.where("role", "==", "tenant").get().then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setItems(items);
      });
    },
    //eslint-disable-next-line
    []
  );
  return (
    <Container className={classes.cont}  >
      <DataGrid className={classes.layout} rows={items} columns={columns} pageSize={5}  />
    </Container>
  );
};

export default TenantNames;
