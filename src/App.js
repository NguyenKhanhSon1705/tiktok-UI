import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { publicRoutes } from "~/Routers";
import { DefaultLayout } from "~/Layouts/";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, i) => {
            let Layout = DefaultLayout
            if(route.layout === null){
              Layout = Fragment
            }else if(route.layout){
              Layout = route.layout
            }
            // const Layout = route.layout === null ? Fragment : DefaultLayout
            const Page = route.component
            return <Route key={i}
                   path={route.path}
                  element={<Layout><Page /></Layout>} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
