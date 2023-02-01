import '../styles/globals.css'
import { Provider } from "react-redux";
import { Store } from "redux";
import { createStore } from "redux";
import type { AppProps } from 'next/app'
import rootReducer from "../store/reducers/cartReducer";
const store: Store<any, any> = createStore(rootReducer);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

// import React from "react";


// export default function App({ Component, pageProps }) {
// return (
// <Provider store={store}>
// <Component {...pageProps} />
// </Provider>
// );
// }
