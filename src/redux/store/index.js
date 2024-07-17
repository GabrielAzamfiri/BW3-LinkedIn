import { combineReducers, configureStore } from "@reduxjs/toolkit";

import myProfileReducer from "../reducers/myProfile";
import epicProfilesReducer from "../reducers/epicProfilesReducer";
import showHideReducer from "../reducers/showHideReducer";

import searchReducer from "../reducers/searchReducer";
import userReducer from "../reducers/userReducer";

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
