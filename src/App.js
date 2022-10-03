import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Main from './Layout/Main/Main';

function App() {
  const router = createBrowserRouter([
    {path: '/',
     element: <Main></Main>,
     children:[
       {path: '/', element: <Home></Home>},
       {path: '/home', element: <Home></Home>},
       {path: '/products', element: <Products></Products>},
       {
        path:'/friends',
        loader: async()=>{
          return fetch('https://jsonplaceholder.typicode.com/users');
        },
        element:<Friends></Friends>
      },
      {
        path:'friend/:friendId',
        loader: async({params})=>{
          console.log(params)
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        },
        element:<FriendDetails></FriendDetails>
      }
    ]},
    {path: '/about', element: <About></About>},
    {path: '*', element: <h1>This menu not found</h1>},
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
