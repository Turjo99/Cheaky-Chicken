import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Forms/Login";
import Signup from "../Components/Forms/Signup";
import Home from "../Components/Header/Home/Home";
import AddItem from "../Components/Items/AddItem";
import AllItem from "../Components/Items/AllItem";
import ItemDetail from "../Components/Items/ItemDetail";
import Main from "../Components/Main/Main";
import MyReviews from "./MyReviews";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allItems",
        element: <AllItem></AllItem>,
      },
      {
        path: "/allItems/:id",
        element: <ItemDetail></ItemDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allItems/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addItem",
        element: (
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
