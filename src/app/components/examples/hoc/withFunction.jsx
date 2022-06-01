import React from "react";
import Card from "../../common/Card";
import Subtitle from "../../common/typografy/subtitle";

const withFunction = (Component) => (props) => {
   const isAuth = localStorage.getItem("user");
   const handleLogin = () => {
      return localStorage.getItem("user");
   };
   const handleLogOut = () => {
      return localStorage.setItem("user", "");
   };
   return (
      <Card>
         <Subtitle>Simple Component</Subtitle>
         <Component
            onLogin={handleLogin}
            onLogOut={handleLogOut}
            isAuth={isAuth}
            {...props}
         />
      </Card>
   );
};

export default withFunction;
