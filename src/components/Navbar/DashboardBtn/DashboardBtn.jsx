import { useState, useEffect, useRef } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
import { Link } from 'react-router-dom';

const DashboardBtn = () => {
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

    return (
        <div className="relative z-50 inline-block text-left" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                type="button"
                className="inline-flex justify-center w-full"
            >
                Dashboard <span className='text-2xl pl-1'>
                    {
                        isOpen ?
                            <IoIosArrowDropup />
                            :
                            <IoIosArrowDropdown />
                    }
                </span>
            </button>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 z-50 lg:mt-6 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <Link
                            to={"myservices"}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            onClick={() => setIsOpen(false)}
                        >
                            My Services
                        </Link>
                        <Link
                            to={'addservice'}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            onClick={() => setIsOpen(false)}
                        >
                            Add a service
                        </Link>
                        <Link
                            to={'/schedules'}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            onClick={() => setIsOpen(false)}
                        >
                            My schedules
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardBtn;