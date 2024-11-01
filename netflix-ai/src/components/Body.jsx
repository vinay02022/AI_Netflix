import Login from './Login';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from './Browse';

const Body = () => {

  // Define your routes
  const appRouter = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/browse', element: <Browse /> },
    { path: '/login', element: <Login /> }
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
