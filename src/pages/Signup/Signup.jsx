import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";

const Signup = () => {
  const { createUser } = useContext(AuthContext);


  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const displayName = form.name.value;
    const photoURL = form.photo.value;

    createUser(email, password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.error(error)
      })

    const newUser = { email, photoURL, displayName, bookedServices: [] }

    //send data
    fetch('https://homey-server.vercel.app/adduser', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
      <Helmet><title>Sign up</title></Helmet>
      <h1 className="text-2xl font-bold text-center">Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-1 text-sm">
          <label for="photo" className="block dark:text-gray-400">PhotoURL</label>
          <input type="text" name="photo" placeholder="PhotoURL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
        </div>
        <div className="space-y-1 text-sm">
          <label for="name" className="block dark:text-gray-400">Name</label>
          <input type="text" name="name" placeholder="name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
        </div>
        <div className="space-y-1 text-sm">
          <label for="email" className="block dark:text-gray-400">Email</label>
          <input type="email" name="email" placeholder="name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
        </div>
        <div className="space-y-1 text-sm">
          <label for="password" className="block dark:text-gray-400">Password</label>
          <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
          <div className="flex justify-end text-xs dark:text-gray-400">
            <Link>Forgot Password?</Link>
          </div>
        </div>
        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign in</button>
      </form>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
        <Link to={'/login'} className="underline dark:text-gray-100">Login</Link>
      </p>
    </div>
  );
};

export default Signup;