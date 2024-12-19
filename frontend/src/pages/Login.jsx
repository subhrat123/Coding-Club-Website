import React from 'react';
const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
            {/* Tailwind CSS + Flowbite Login Form */}
<div>
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6               space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
                                  type="email"
              name="email"
              id="email"></input>
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
              id="password"></input>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex        items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                  type="checkbox"
                  ></input>

              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            > Sign in</button>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Login;