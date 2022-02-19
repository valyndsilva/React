import React from "react";
import { Route, Redirect } from "react-route-dom";

//check if user is logged and redirect user to browse page
// protected routes
export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          // if no user logged in render children (Ex: component or page like signin or signup)
          return children;
        }

        if (user) {
          // if user logged in redirect to loggedInPath
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
