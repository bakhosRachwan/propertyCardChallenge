import { Redirect, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import firebase from "./firebase";

const PrivateRoute = ({ component: RouteComponent, ...rest}) => {
    const [user, setUser] = useState(() => firebase.auth().currentUser);
    const [initializing, setInitializing] = useState(true);
  
    useEffect(
      () => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            setUser(user);
          } else {
            setUser(null);
          }
          if (initializing) {
            setInitializing(false);
          }
        });
  
        return unsubscribe;
      },
      //eslint-disable-next-line
      []
    );
    return (  
        <Route
            {...rest}
            render={routerProps =>
                user? (
                    <RouteComponent  />
                ):(
                    <Redirect to={"/signup"} />
                ) 
            }
        />
    );
}
 
export default PrivateRoute;