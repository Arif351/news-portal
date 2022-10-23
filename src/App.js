import './App.css';
import { routes } from './Components/Route/Route';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>

    </div>
  );
}

export default App;
