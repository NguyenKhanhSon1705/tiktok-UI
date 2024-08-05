import Home from "~/Components/Pages/Home";
import Following from "~/Components/Pages/Following";
import Profile from "~/Components/Pages/Profile";
import Upload from "~/Components/Pages/Upload";
import { HeaderOnly } from "~/Components/Layouts";
import Search from "~/Components/Pages/Search";

import routesConfig from '~/Config/routes'


const publicRoutes = [
    { path: routesConfig.home , component: Home},
    { path: routesConfig.following , component: Following },
    { path: routesConfig.profile , component: Profile },
    { path: routesConfig.upload , component: Upload, layout: HeaderOnly },
    { path: routesConfig.search , component: Search, layout: null },
    
]

const privateRoutes = [
    // {
    //     path: 
    // }
]

export {privateRoutes , publicRoutes}