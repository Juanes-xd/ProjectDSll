import { React, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";

export const Register = () => {
  const [user, setUser] = useState({
    nombre: "",
    correo: "",
    password: "",
    telefono: "",
    ciudad: "",
    direccion: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { nombre, correo, password, telefono, ciudad, direccion } = user;
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (
        nombre !== "" &&
        password !== "" &&
        correo !== "" &&
        telefono !== "" &&
        ciudad !== "" &&
        direccion !== ""
      ) {
        const Usuario = {
          nombre,
          correo,
          password,
          telefono,
          ciudad,
          direccion,
        };
        setLoading(true);
        await axios
          .post("http://localhost:4000/signup", Usuario)
          .then((res) => {
            const { data } = res;
            setUser({
              nombre: "",
              password: "",
              correo: "",
              telefono: "",
              ciudad: "",
              direccion: "",
            });
            setTimeout(() => {
              localStorage.setItem("x-access-token", data?.usuario.token);
              navigate("/");
            }, 1500);
          });

        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-gradient-to-b from-yellow-300 to-stone-900 max-h-max text-black flex  ">
      <div className="w-full max-w-xs m-auto ">
        {error && <Alert message={error} />}

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="nombre"
              className="block text-gray-700 text-sm font-fold mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-fold mb-2"
            >
              Correo
            </label>
            <input
              type="email"
              name="correo"
              placeholder="youremail@company.ltd"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="telefono"
              className="block text-gray-700 text-sm font-fold mb-2"
            >
              Telefono
            </label>
            <input
              type="tel"
              name="telefono"
              placeholder="Tu telefono"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="ciudad"
              className="block text-gray-700 text-sm font-fold mb-2"
            >
              Ciudad
            </label>
            <input
              type="text"
              name="ciudad"
              placeholder="Tu direccion"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="direccion"
              className="block text-gray-700 text-sm font-fold mb-2"
            >
              Direccion
            </label>
            <input
              type="text"
              name="direccion"
              placeholder="Ciudad"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            />
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {loading ? "Cargando..." : "Registrarme"}
          </button>
        </form>

        <p className="my-4 text-sm text-white flex font-bold justify-between px-3">
          ¿Ya tienes cuenta?<Link to="/login">Inicia sesion</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
