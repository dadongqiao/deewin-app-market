import { combineReducers } from '@reduxjs/toolkit';
import companies from '../companiesSlice';
import tags from '../tagsSlice';
import apps from '../appsSlice';
const rootReducer = combineReducers({
   companies,
   tags,
   apps
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;