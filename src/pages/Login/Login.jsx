import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser, googleSignIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(result => {
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        console.error(error);
      })
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const email = result.user.email;
        const displayName = result.user.displayName;
        const photoURL = result.user.photoURL;
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

        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        console.error(error);
      })
  }

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
      <Helmet><title>Login</title></Helmet>
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-1 text-sm">
          <label for="email" className="block dark:text-gray-400">Email</label>
          <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
        </div>
        <div className="space-y-1 text-sm">
          <label for="password" className="block dark:text-gray-400">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
          <div className="flex justify-end text-xs dark:text-gray-400">
            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
          </div>
        </div>
        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign in</button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm text-3xl">
          <FcGoogle />
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
        <Link to={'/signup'} className="underline dark:text-gray-100">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;