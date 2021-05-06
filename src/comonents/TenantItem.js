import {
  Box,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    width: 500,
    margin: theme.spacing(2),
    background: "lightcyan",
    padding: theme.spacing(2),
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
}));
const TenantItem = ({ item }) => {
  const classes = useStyles();
  return (
    <Container className={classes.main} display="flex" flexDirection="column">
      <Box display="flex">
        <Typography variant="h6">Owner Name:</Typography>
        <Typography variant="h6">{item.ownerId}</Typography>
      </Box>
      <Box display="flex">
        <Box display="flex" marginRight={3}>
          <Typography variant="h6">Start Date:</Typography>
          <Typography variant="h6">{item.startDate}</Typography>
        </Box>
        <Box display="flex">
          <Typography variant="h6">End Date:</Typography>
          <Typography variant="h6">{item.endDate}</Typography>
        </Box>
      </Box>

      <Box display="flex">
        <Box display="flex" marginRight={3}>
          <Typography variant="h6">Property Id: </Typography>
          <Typography variant="h6">{item.propertyId}</Typography>
        </Box>
        <Box display="flex">
          <Typography variant="h6">Address:</Typography>
          <Typography variant="h6">{item.address}</Typography>
        </Box>
      </Box>
      <Box >
        <Box display="flex">
          <Typography variant="h6">Tenant Id:</Typography>
          <Typography variant="h6">{item.tenantId}</Typography>
        </Box>
        <Box display="flex">
          <Typography variant="h6">Tenant Email:</Typography>
          <Typography variant="h6">{item.tenantEmail}</Typography>
        </Box>
      </Box>
      <Box display="flex">
        <Typography variant="h6">Amount:</Typography>
        <Typography variant="h6">{item.amount}</Typography>
      </Box>
    </Container>
  );
};

export default TenantItem;
