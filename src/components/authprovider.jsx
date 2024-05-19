import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const [refreshToken, setRefreshToken_] = useState(window.localStorage.getItem("refreshToken"));
  // Function to set the authentication token
  const setToken = (newToken) => {
    setToken_(newToken);
  };
  const setRefreshToken = (newRefreshToken) => {
    setRefreshToken_(newRefreshToken);
  }

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      window.localStorage.setItem('token',token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      window.localStorage.removeItem('token')
    }
    if(refreshToken) {
      window.localStorage.setItem('refreshToken', refreshToken);
    } else {
      window.localStorage.removeItem('refreshToken');
    } 
  }, [token, refreshToken]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      refreshToken,
      setRefreshToken
    }),
    [token, refreshToken]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;