import Home from "~/Components/Pages/Home";
import Following from "~/Components/Pages/Following";
import Profile from "~/Components/Pages/Profile";
import Upload from "~/Components/Pages/Upload";
import { HeaderOnly } from "~/Components/Layouts";
import Search from "~/Components/Pages/Search";

const publicRoutes = [
    { path: '/' , component: Home},
    { path: '/following' , component: Following },
    { path: '/profile' , component: Profile },
    { path: '/upload' , component: Upload, layout: HeaderOnly },
    { path: '/search' , component: Search, layout: null },
    
]

const privateRoutes = [
    // {
    //     path: 
    // }
]

export {privateRoutes , publicRoutes}