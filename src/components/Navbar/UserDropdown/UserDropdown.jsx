import { useState, useEffect, useRef, useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const UserDropdown = () => {
    const { logOut, userData } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeDropdown);

        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    }, []);

    const handleSignOut = () => {
        logOut()
        setUserDrop(false)
    }

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                type="button"
                className="inline-flex justify-center w-full"
            >
                {userData?.photoURL ? (
                    <img alt="User" className="w-8 h-8 rounded-full ri ri dark:bg-gray-500 ri ri" src={userData.photoURL} />
                ) : (
                    <FaUserCircle />
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md text-base bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
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
};

export default UserDropdown;