import  { useState } from "react";
import { Link } from "react-router-dom";

function LogIn() {
  const [input, setInput] = useState({
    teamname: "",
    password: ""
  });

  const [error, setError] = useState({
    teamname: "",
    password: ""
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    // validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "teamname":
          if (!value) {
            stateObj[name] = "Please enter teamname.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } 
          break;
        default:
          break;
      }

      return stateObj;
    });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-[#D0D0D5] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="p-4 text-xl font-medium leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex items-center justify-center">
              Sign In to your Account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="team"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  UserName
                </label>
                <input
                  type="name"
                  name="teamname"
                  id="team"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" Enter your name here"
                  value={input.teamname}
                  onChange={onInputChange}
                  onBlur={validateInput}
                  required=""
                ></input>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={input.password}
                  onChange={onInputChange}
                  onInput={validateInput}
                ></input>

                {error.password && (
                  <span className="err">{error.password}</span>
                )}
              </div>
              <Link
              to="/Courses"
                type="submit"
                className="w-full  bg-[#FFBC3F]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Log In
              </Link>
              <p className="text-sm font-light text-gray-900 dark:text-gray-400">
                New Registration ?{" "}
                <Link
                  class="font-medium text-primary-600 hover:underline dark:text-primary-700"
                  to={"/signup"}
                >
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogIn;