import Home from "~/Components/Pages/Home";
import Following from "~/Components/Pages/Following";
import Profile from "~/Components/Pages/Profile";
import Upload from "~/Components/Pages/Upload";
import { HeaderOnly } from "~/Layouts";
import Search from "~/Components/Pages/Search";

import config from '~/Config'


const publicRoutes = [
    { path: config.routes.home , component: Home},
    { path: config.routes.following , component: Following },
    { path: config.routes.profile , component: Profile },
    { path: config.routes.upload , component: Upload, layout: HeaderOnly },
    { path: config.routes.search , component: Search, layout: null },
    
]

const privateRoutes = [
    // {
    //     path: 
    // }
]

export {privateRoutes , publicRoutes}