import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './components/root/root';
import Home from './components/home/home';
import Genres from './pages/genres';
import Story from './pages/story';
import Playing from './pages/playing';

const AppRouter = createBrowserRouter(createRoutesFromElements(

  <Route path="/" element={<Root/>}>
    <Route index element={<Home/>}/>
    <Route path="genres/:id" element={<Genres/>}/>
    <Route path="genres/:id/:name" element={<Story/>}/>
    <Route path="genres/:id/:name/playing" element={<Playing/>}/>
  </Route>
))
function App() {

  return (
    <>
    <RouterProvider router={AppRouter}/>
    </>
  )
}

export default App
