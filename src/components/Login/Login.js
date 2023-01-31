import { React, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";

export const Login = () => {
  const [user, setUser] = useState({
    correo: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { correo, password } = user;

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (correo !== "" && password !== "") {
        const Usuario = {
          correo,
          password,
        };
        setLoading(true);
        await axios
          .post("http://localhost:4000/signin", Usuario)
          .then((res) => {
            const { data } = res;
            setTimeout(() => {
              localStorage.setItem("x-access-token", data?.token);
              navigate("/");
            }, 1500);
          })
          .catch((error) => {
            console.error(error);

            setTimeout(() => {}, 1500);
          });
        setUser({ correo: "", contraseña: "" });
        setLoading(false);
      }
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-gradient-to-b from-yellow-300 to-stone-900 h-screen text-black flex ">
      <div className="w-full max-w-xs m-auto ">
        {error && <Alert message={error} />}

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label //background: rgb(2,0,36);
              //background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(196,184,15,1) 53%, rgba(255,252,0,1) 100%);
              htmlFor="email"
              className="block text-gray-700 text-sm font-fold mb-2"
            >
              Correo
            </label>
            <input
              type="email"
              name="correo"
              placeholder="tucorreocompany.ltd"
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
          <div className="flex items-center justify-between">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              {loading ? "Cargando..." : "Login"}
            </button>
          </div>
        </form>

        <p className="my-4 text-sm flex justify-between px-3 font-bold text-white">
          ¿No tienes cuenta?<Link to="/register">Registrate</Link>
        </p>
      </div>
    </div>
  );
};
