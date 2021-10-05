import axios from "axios";
import { loginStart, loginSuccess, loginError } from "./redux/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginCall = async (userCredentials) => {
  // dispatch(loginStart());
  const headers = {
    Client_Secret: "Ku0DjUFHdGUUbvEkHqv975WLPQv5DJYpK6k",
    App_No: "07fix32665",
    Resource_Code: "301",
  };
  // console.log("touched.....");
  try {
    const res = await axios.post(
      "https://backend.bitmoservice.com/api/resources/v1/client/register",
      userCredentials,
      { headers: headers }
    );
    console.log(res.data);
    // dispatch(loginSuccess(res.data));

    // await AsyncStorage.setItem("user");
  } catch (err) {
    console.log(err);
    dispatch(loginError);
  }
};
