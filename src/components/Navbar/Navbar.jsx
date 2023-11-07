import { NavLink, Link } from 'react-router-dom';
import { CiDark, CiLight } from 'react-icons/ci'
import { useContext, useEffect, useState } from 'react';
import { CgMenu } from "react-icons/cg"
import { RxCross2 } from 'react-icons/rx'
import { IoIosArrowDropdown } from 'react-icons/io'
import { AuthContex } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {

  const { user, logOut, userData } = useContext(AuthContex)

  const [dropDown, setDropDown] = useState(false)
  const [dashboarddrop, setDashboarddrop] = useState(false)
  const [userDrop, setUserDrop] = useState(false)
  const [isDark, setIsDark] = useState()


  const dropdownStyles = `absolute z-10 right-0 bg-black ${dropDown ? 'top-24' : 'top-[-400px]'}`;

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])


  const handleTheme = () => {
    if (!isDark) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }

  const handleSignOut = () => {
    logOut()
    setUserDrop(false)
  }

  const handleNavLinks = ({ isActive }) => {
    return isActive
      ? "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
      : "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-300";
  };

  const dropdownbtn = <>
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-300"
          onClick={() => setDashboarddrop(!dashboarddrop)}
        >
          Dashboard <IoIosArrowDropdown />
        </button>
      </div>
      {dashboarddrop && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <div className="py-1" role="none">
            <Link onClick={() => setDropDown(false)} to={"myservices"} className="text-gray-700 block px-4 py-2 text-sm">My Services</Link>
            <Link onClick={() => setDropDown(false)} to={'addservice'} className="text-gray-700 block px-4 py-2 text-sm">Add a services</Link>
            <Link onClick={() => setDropDown(false)} to={'/schedules'} className="text-gray-700 block px-4 py-2 text-sm">My schedules</Link>
          </div>
        </div>
      )}
    </div>
  </>


  const links = <>
    <li className="flex"><NavLink to={'/'} className={handleNavLinks}>Home</NavLink></li>
    <li className="flex"><NavLink to={'/services'} className={handleNavLinks}>Services</NavLink></li>
    <li className="flex"><div className='flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-300'>{dropdownbtn}</div></li>
  </>


  const userDropdown = (
    <div className="relative inline-block text-left">
      <button onClick={() => setUserDrop(!userDrop)}>
        {userData?.photoURL ? (
          <img alt="User" className="w-8 h-8 rounded-full ri ri dark:bg-gray-500 ri ri" src={userData.photoURL} />
        ) : (
          <FaUserCircle />
        )}
      </button>
      {userDrop && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <div className="py-1" role="none">
            <div className="flex items-center px-4 py-2">
              {userData?.photoURL && (
                <img alt="User" className="w-8 h-8 rounded-full mr-2" src={userData.photoURL} />
              )}
              <div>
                <p className="text-gray-800 font-semibold">{userData?.displayName}</p>
                <p className="text-gray-500">{userData?.email}</p>
              </div>
            </div>
            <button onClick={handleSignOut} className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );


  return (
    <div className="relative p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <Link to={'/'} className="flex items-center p-2">Homey</Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          {links}
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className='mr-4 text-2xl' onClick={handleTheme}>
            {
              isDark ? <CiLight /> : <CiDark />
            }
          </button>
          <div >
            {user ?
              userDropdown
              :
              <Link className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900" to={'login'}>Login</Link>
            }
          </div>
        </div>
        <button onClick={() => setDropDown(!dropDown)} className="p-4 lg:hidden text-2xl w-6 h-6 dark:text-gray-100">
          {
            dropDown ? <RxCross2 /> : <CgMenu />
          }
        </button>
      </div>
      <div className={dropdownStyles}>
        {links}
      </div>
    </div >
  );
};

export default Navbar;