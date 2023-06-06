import {
  // createBrowserRouter,
  createHashRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Music from './pages/Music'
import Episodes from './pages/Episodes'
import { useState } from 'react'
import styled from 'styled-components'
import Top from './components/Top'



const Container = styled.div<{darkmode:boolean}>`
  background-color: ${p => p.darkmode ? "#222222" : "#dddddd"};
`

const App = () => {
  const [darkmode,setDarkmode] = useState<boolean>(false);
  const Layout = () => {
    return (
      <>
        <Header setDarkmode={(darkmode: boolean) => setDarkmode(darkmode)} darkmode={darkmode}/>
        <Outlet />
        <Top darkmode={darkmode} />
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
          element: <Episodes darkmode={darkmode}/>
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