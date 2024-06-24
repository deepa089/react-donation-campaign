import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import DonationDetails from './components/DonationDetails/DonationDetails.jsx';
import DonationList from './components/DonationList/DonationList.jsx';
import Statistics from './components/Statistics/Statistics.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path : "/",
        element: <Home></Home>
      },
      {
        path : '/donationDetail/:id',
        element : <DonationDetails></DonationDetails>,
        loader: () => fetch('./../public/categoryList.json')
      },
      {
        path : '/donation',
        element: <DonationList></DonationList>,
        loader : () => fetch('./../public/categoryList.json')

      },
      {
        path : '/statistics',
        element: <Statistics></Statistics>,
        loader : () => fetch('./../public/categoryList.json')

      }

       //   {
          //     path: "/donations",
          //     element: <Donations></Donations>,
          //     loader: () => fetch("/donation.json"),
          //   },
          //   {
          //     path: '/update/:id',
          //     element: <Update></Update>,
          //     loader: ({params}) => fetch('http://localhost:5000/users/$ {params.id}')
          //   },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App></App> */}
  </React.StrictMode>,
)
