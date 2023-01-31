import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import Pago from "./components/Checkout/Pago";
import { AuthProvider } from "./context/authContext";

import Homep from "./components/Home/Homep";
import PerfilP from "./components/Perfil/PerfilP";
import Inventario from "./components/Productos/Inventario";
import PagDefault from "./components/Compo/PageDefault";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              // <ProtectedRoutes>
              <Homep />
              //</ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/Pago" element={<Pago />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Perfil" element={<PerfilP />} />
          <Route path="/Productos" element={<Inventario />} />
          <Route path="/PagDefault" element={<PagDefault />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
