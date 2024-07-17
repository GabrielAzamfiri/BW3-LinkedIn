import { combineReducers, configureStore } from "@reduxjs/toolkit";

import myProfileReducer from "../reducers/myProfile";
import epicProfilesReducer from "../reducers/epicProfilesReducer";
import showHideReducer from "../reducers/showHideReducer";
import userReducer from "../../features/user/userSlice";
import searchReducer from "../../features/search/searchSlice";

const rootReducer = combineReducers({
  profile: myProfileReducer,
  epicProfiles: epicProfilesReducer,
  showHide: showHideReducer,
  user: userReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
