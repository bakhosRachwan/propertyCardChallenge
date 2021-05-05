import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./Styles";
import { Link, useHistory } from "react-router-dom";
import { useCallback } from "react";
import firebase from "../../service/firebase";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const ref = firebase.firestore().collection('users');

  const addUser = (newUser) => {
    ref
      .doc(newUser.id)
      .set(newUser)
  }
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, firstName, lastName, role } = event.target.elements;
      try {
        const { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
          addUser({
          firstName: firstName.value,
          lastName: lastName.value,  
          email: email.value,
          id: user.uid,
          role: role.value,
        });
        history.push(`/${role.value}/${user.uid}`);
      } catch (error) {
        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
          alert("Email already in use");
        }
        history.push("/signin");
      }
    },
    //eslint-disable-next-line
    [history]
  );
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            </Grid>
          <RadioGroup
            name="role"
          >
            <FormControlLabel value="owner" control={<Radio />} label="Owner" />
            <FormControlLabel value="tenant" control={<Radio />} label="Tenant" />
          </RadioGroup>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/signin" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
