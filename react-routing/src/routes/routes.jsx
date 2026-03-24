import { createBrowserRouter } from "react-router-dom";
import Dashboard2 from "../routing2/Dashboard2";
import Careers from "../routing2/Careers";
import Services from "../routing2/Services";
import Layout2 from "../routing2/Layout2";
import UserDashBoard from "../routing2/UserDashBoard";
import UserProfile from "../routing2/UserProfile";
import UsersSettings from "../routing2/UsersSettings";
import DynamicHome from "../DynamicRouting/DynamicHome";
import DynamicUser from "../DynamicRouting/DynamicUser";
import DynamicLogin from "../DynamicRouting/DynamicLogin";
import Register from "../pages/Register";
import DynamicRegister from "../DynamicRouting/DynamicRegister";

// let myRoutes=createBrowserRouter([
//     {
//         path:"/",
//         element:<Layout2/>,
//         children:[
//             {
//                 index:true,
//                 element:<Dashboard2/>,
//             },
//             {
//                 path:"/careers",
//                 element:<Careers/>,
//             },
//             {
//                 path:"/services",
//                 element:<Services/>
//             },
//               {
//                 path:"*",
//                 element:<Services/>
//             }
//         ]
//     }
// ])

// export default myRoutes;

// export let myRoutes2 = createBrowserRouter([
//     {
//         path:"/dashboard",
//         element:<UserDashBoard/>,
//         children:[
//             {
//                 path:"user-profile",
//                 element:<UserProfile/>
//             },
//             {
//                 path:"users-settings",
//                 element:<UsersSettings/>
//             },

//         ]
//     }
// ])

let myRoutes3 = createBrowserRouter([
  {
    path: "/",
    element: <Layout2 />,
    children: [
      {
        index: true,
        element: <DynamicHome />,
      },
      {
        path: "/user/:id",
        element: <DynamicUser />,
      },
      {
        path: "/auth/login",
        element: <DynamicLogin />,
      },
      {
        path: "/auth/register",
        element: <DynamicRegister />,
      },
    ],
  },
]);

export default myRoutes3;
