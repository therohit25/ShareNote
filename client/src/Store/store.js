// import { createStore } from "redux";
// import rootReducer from '../Reducers/index'

// const store = createStore(rootReducer)

// export default store;

import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../features/LoginLogout/LoginLogout"

const store = configureStore({
    reducer: {
        user: userSlice
    }
}
)

export default store;