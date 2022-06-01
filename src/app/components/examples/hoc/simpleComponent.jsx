import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, IsAuth }) => {
   return IsAuth ? (
      <button className='btn btn-primary' onClick={onLogin}>
         Войти
      </button>
   ) : (
      <button className='btn btn-primary' onClick={onLogOut}>
         Выйти из системы
      </button>
   );
};

SimpleComponent.propTypes = {
   IsAuth: PropTypes.string,
   onLogin: PropTypes.func,
   onLogOut: PropTypes.func
};

export default SimpleComponent;
