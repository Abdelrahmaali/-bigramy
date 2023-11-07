import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import ContactUs from './Components/ContactUs/ContactUs';
import Courses from './Components/Courses/Courses';
import Cart from './Components/Cart/Cart';
import Ebooks from './Components/Ebooks/Ebooks';
import News from './Components/News/News';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


function App() {

  let routers = createBrowserRouter([
    {path:'',element:<Layout/>, children:[
      {index:true , element:<Home/>},
      {path:'News' , element:<News/>},
      {path:'Courses' , element:<Courses/>},
      {path:'Cart' , element:<Cart/>},
      {path:'Ebooks' , element:<Ebooks/>},
      {path:'ContactUs' , element:<ContactUs/>},
      {path:'Login' , element:<Login/>},
      {path:'Register',element:<Register/>},
      {path:'*' , element:<NotFound/>},




    ]}
  ])
  
  return (
   <>
   <RouterProvider router={routers}></RouterProvider>
   </>
  );
}

export default App;
