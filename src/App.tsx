import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Music from "./pages/Music";
import Episodes from "./pages/Episodes";
import { createContext, useState } from "react";
import styled from 'styled-components'



const Container = styled.div<{darkmode:boolean}>`
  background-color: ${p => p.darkmode ? "#222222" : "#dddddd"};
`

const App = () => {
  const [darkmode,setDarkmode] = useState<boolean>(false);
  const Layout = () => {
    return (
      <>
        <Navbar setDarkmode={(darkmode: boolean) => setDarkmode(darkmode)} darkmode={darkmode}/>
        <Outlet />
        <Footer darkmode={darkmode}/>
      </>
    )
  }
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home darkmode={darkmode}/>
        },
        {
          path: "/characters",
          element: <Characters darkmode={darkmode}/>
        },
        {
          path: "/music",
          element: <Music darkmode={darkmode}/>
        },
        {
          path: "/episodes",
          element: <Episodes />
        }
      ]
    }
  ])
  return (
    <Container darkmode={darkmode}>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App