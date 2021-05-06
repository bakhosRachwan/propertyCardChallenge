import { Box, Container, Typography } from "@material-ui/core";
import TenancyCard from "../../comonents/TenancyCard";
import TenantNames from "../../comonents/TenantNames";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    layout: {
      padding: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
          display: "flex",
          flexDirection: "column",
        },
        [theme.breakpoints.up("lg")]: {
            display: "flex",
      },
    }
  }));
const Owner = () => {
    const classes = useStyles();
  return (
    <Container>
      <Typography variant="h4">Owner Page</Typography>
      <Box className={classes.layout}>
        <TenantNames />
        <TenancyCard />
      </Box>
    </Container>
  );
};

export default Owner;
