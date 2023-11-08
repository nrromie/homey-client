import { NavLink, Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import DashboardBtn from './DashboardBtn/DashboardBtn';
import UserDropdown from './UserDropDown/UserDropdown';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [dropdown, setDropdown] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleScroll = () => {
    const scrolled = window.scrollY > 0;
    setIsScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.theme;
    setIsDark(storedTheme === 'dark' || (!storedTheme && prefersDarkMode));
    document.documentElement.classList.toggle('dark', storedTheme === 'dark' || (!storedTheme && prefersDarkMode));
  }, []);

  const handleTheme = () => {
    const newIsDark = !isDark;
    document.documentElement.classList.toggle('dark', newIsDark);
    setIsDark(newIsDark);
  };

  const handleNavLinks = ({ isActive }) => {
    const baseStyle = "px-4 hover:text-[#89C8F7]";
    return isActive
      ? `${baseStyle} text-[#2A98D9]`
      : baseStyle;
  };

  const links = (
    <>
      <li><NavLink to={'/'} className={handleNavLinks}>Home</NavLink></li>
      <li><NavLink to={'/services'} className={handleNavLinks}>Services</NavLink></li>
      {user && <li><div className='px-4 hover:text-[#89C8F7]'><DashboardBtn /></div></li>}
      <li><button className='mr-4 text-2xl' onClick={handleTheme}>
        {isDark ? <FaSun /> : <FaMoon />}
      </button></li>
    </>
  );

  return (
    <div className={`sticky top-0 z-50 ${isScrolled ? 'bg-white dark:bg-slate-800' : 'bg-transparent'} dark:text-gray-100`}>
      <div className="relative h-[10vh] w-11/12 mx-auto flex justify-between items-center">
        <Link to={'/'} className="flex items-center p-2"><img src="/images/logo.svg" alt="logo" className="h-12 mr-2" /> Homey</Link>
        <ul className="hidden space-x-3 items-center lg:flex">
          {links}
        </ul>
        <div className='flex items-center gap-2'>
          <div className='text-2xl'>
            {
              user ?
                <UserDropdown />
                :
                <Link className="self-center px-8 py-3 font-semibold rounded bg-[#2A98D9] text-white" to={'login'}>
                  Login
                </Link>
            }
          </div>
          <div>
            <button onClick={toggleDropdown} className="lg:hidden text-2xl dark:text-gray-100">
              {dropdown ? <FaTimes /> : <FaBars />}
            </button>
            <div className={`absolute top-16 right-0 bg-white dark:bg-slate-900 dark:text-white rounded-md shadow-md overflow-hidden transition-all duration-300 ${dropdown ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'}`}>
              <ul className="py-2 px-4">
                {links}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;