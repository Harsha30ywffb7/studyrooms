// we will start writing routes from here.

// types of writing routes are two types using routes and createBrowserRouter need to check when to use what.

import {createBrowserRouter} from 'react-router-dom';
import Homepage from '../pages/homepage';
import Roompage from '../pages/roompage';
// create browserrouter takes the array of routes.

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <Homepage/>
        },
        {
            path:"/room/:id",
            element:<Roompage/>
        }
    ]
);

export default router;
