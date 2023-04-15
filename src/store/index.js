import {configureStore} from '@reduxjs/toolkit'
import createauth from './auth-slice.js'
import createslice from './Cart-slice.js'
import uiSlice from './UI-slice.js';
const store = configureStore({
  reducer: { auth: createauth.reducer, cart: createslice.reducer,ui:uiSlice.reducer},
});
export default store;