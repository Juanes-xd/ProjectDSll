import { React, useState } from "react";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError("Ingrese su correo");

    try {
      await resetPassword(user.email);
      setError(
        "Hemos enviado un correo con un link para que reestablezcas tu contraseña"
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-gradient-to-b from-yellow-400 to-stone-800 h-screen text-black flex ">
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
              name="email"
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
          <div className="flex items-center justify-between">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
            <a
              href="#!"
              className="inline-block align-baseline font-bold text-sm text-black-500 hover:text-black-800"
              onClick={handleResetPassword}
            >
              ¿Olvidate tu contraseña?
            </a>
          </div>
        </form>

        <p className="my-4 text-sm flex justify-between px-3 font-bold text-black">
          ¿No tienes cuenta?<Link to="/register">Registrate</Link>
        </p>

        <button
          onClick={handleGoogleSignin}
          className="bg-yellow-500  hover:bg-yellow-700 font-bold text-black shadow-md rounded-lg rounded-border-2  py-2 px-4 w-full"
        >
          Google
        </button>
      </div>
    </div>
  );
};
