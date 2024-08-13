import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import UserForm from './Components/UserForm';
import App from './App';
import ShoppingItems from './Components/ShoppingItems';
import {Provider} from  'react-redux'
import store from './store';
import Orders from './Components/Orders';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path:'/', element:<ShoppingItems/>},
      {path:'/orders', element:<Orders/>},
    ]
  },
  {path:'users/sign_in', element:<UserForm isSignInPage={true} />},
  {path:'users/sign_up', element:<UserForm isSignInPage={false}/>},
]);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
