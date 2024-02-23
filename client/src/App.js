import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import PublicRoutes from "./components/Routes/PublicRoutes";
import Donar from "./pages/Dashboard/Donar";
import Hospitals from './pages/Dashboard/Hospitals';

function App() {
  return (
    <>
      {/* <ToastContainer /> */}
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={
          <ProtectedRoutes>
            <HomePage />
          </ProtectedRoutes>
        } />
        <Route
          path="/hospital"
          element={
            <ProtectedRoutes>
              <Hospitals />
            </ProtectedRoutes>
          }
        />
        <Route path="/donar" element={
          <ProtectedRoutes>
            <Donar />
          </ProtectedRoutes>

        } />
        <Route path="/login" element={

          <PublicRoutes>
            <Login />
          </PublicRoutes>} />
        <Route path="/register" element={

          <PublicRoutes>
            <Register />
          </PublicRoutes>
        } />
      </Routes>
    </>
  );
}

export default App;
