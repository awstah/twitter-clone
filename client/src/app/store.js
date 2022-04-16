import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./slices/userSlice";

export default configureStore({
  reducer: {
    user: userReduce,
  },
});
