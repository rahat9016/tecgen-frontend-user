import { EnhancedStore, StoreEnhancer, ThunkDispatch, Tuple, UnknownAction, configureStore } from "@reduxjs/toolkit"
import { CombinedState } from "@reduxjs/toolkit/query"
import authReducer from "../redux/feature/auth/authAction"
import { getUserData } from "../utility/getUser"
import { api } from "./api/apiSlice"
import { IInitialState } from "./feature/auth/authAction"

const token = localStorage.getItem('token')

const initialState: IInitialState = {
  loading: false,
  userInfo: getUserData(token) || null,
  userToken: token,
  error: null,
  success: false,
}

const store: EnhancedStore<
  {
    api: CombinedState<{}, never, 'api'>
    auth: IInitialState
  },
  UnknownAction,
  Tuple<
    [
      StoreEnhancer<{
        dispatch: ThunkDispatch<
          {
            api: CombinedState<{}, never, 'api'>
            auth: IInitialState
          },
          undefined,
          UnknownAction
        >
      }>,
      StoreEnhancer,
    ]
  >
> = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  },
  preloadedState: {
    auth: initialState,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
