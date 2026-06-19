import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store";
import reportWebVitals from './reportWebVitals';

/* Mount the React app and wrap it with the Redux Provider so components
 can access the store via react-redux hooks (useSelector/useDispatch).*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Performance measurement helper (optional).
reportWebVitals();
