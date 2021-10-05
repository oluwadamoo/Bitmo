import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getUser = async function() {
  try {
    return await AsyncStorage.getItem("user");
  } catch (e) {
    console.log(e);
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: getUser() || null,
    pending: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.pending = true;
    },
    loginSuccess: (state, action) => {
      state.pending = false;
      state.userData = action.payload;
    },
    loginError: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});

export const { loginStart, loginSuccess, loginError } = userSlice.actions;
export default userSlice.reducer;
