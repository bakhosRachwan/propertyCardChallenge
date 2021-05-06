import { Typography, Grid, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useCallback, useEffect, useState } from "react";
import firebase from "../service/firebase";

const useStyles = makeStyles((theme) => ({
  layout: {
    boxShadow: "0px 7px 8px -2px rgba(0,0,0,0.25)",
    width: "auto",
    margin:theme.spacing(2),
    padding: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));
const TenancyCard = () => {
  const classes = useStyles();
  const [items, setItems] = useState("");
  const [tenancyRec, setTenancyRec] = useState("");

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const {
        propertyId,
        ownerId,
        tenantEmail,
        tenantId,
        startDate,
        endDate,
        amount,
        address,
      } = event.target.elements;
      setTenancyRec({
        propertyId: propertyId.value,
        ownerId: ownerId.value,
        tenantEmail: tenantEmail.value,
        tenantId: tenantId.value,
        startDate: startDate.value,
        endDate: endDate.value,
        amount: amount.value,
        address: address.value,
      });

      try {
        await firebase
          .firestore()
          .collection("users")
          .where("id", "==", tenantId.value)
          .get()
          .then((querySnapshot) => {
            const item = [];
            querySnapshot.forEach((doc) => {
              item.push(doc.data().record);
            });
            setItems(...item);
          });
      } catch (error) {
        alert(error);
      }
    },
    //eslint-disable-next-line
    [items]
  );
  useEffect(
    () => {
      const w = [...items, tenancyRec];
      console.log(w);
      firebase
        .firestore()
        .collection("users")
        .doc(tenancyRec.tenantId)
        .update({ record: w });
      alert("Tenancy Record Sent!")
    }, //eslint-disable-next-line
    [items]
  );
  return (
    <main className={classes.layout}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>
          Tenanct Record
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="propertyId"
              name="propertyId"
              label="Property Id"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="ownerId"
              name="ownerId"
              label="Owner Id"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="tenantEmail"
              name="tenantEmail"
              label="Tenant Email"
              type="email"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="tenantId"
              name="tenantId"
              label="Tenant Id"
              fullWidth
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="startDate"
              name="startDate"
              label="Start Date"
              fullWidth
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="endDate"
              name="endDate"
              label="End Date"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="amount"
              name="amount"
              label="Amount"
              type="number"
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              name="address"
              label="Address"
              fullWidth
              autoComplete="shipping address-line2"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </main>
  );
};

export default TenancyCard;
