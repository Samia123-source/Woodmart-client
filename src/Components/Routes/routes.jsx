import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Home/Home";

import KeycapList from "../KeycapList";
import KeycapDetails from "../Keycaps/KeycapDetails";
import Responsive from "../Responsive";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
                {
        path: '/',
        element:<Home></Home>,
    },
    {
        path:'/keycapList',
        element:<KeycapList></KeycapList>
    },
    {
        path:"/keycapDetails",
        element: <KeycapDetails></KeycapDetails>

    },
    {
        path:"/responsive",
        element: <Responsive></Responsive>
    }




        ]
    },

])

export default routes