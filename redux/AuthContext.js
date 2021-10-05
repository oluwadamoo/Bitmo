import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem("user");
    return value;
  } catch (e) {
    console.log(e);
  }
};

const storeUser = async (value) => {
  try {
    await AsyncStorage.setItem("user", value);
  } catch (e) {
    console.log(e);
  }
};

const INITIAL_STATE = {
  user: getUser() || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    storeUser(state.user);
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
