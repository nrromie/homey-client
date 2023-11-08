import React from 'react';

const Aboutus = () => {
    return (
        <section className="p-8 bg-white dark:bg-slate-800">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6">About Us</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    Welcome to Homey, your go-to platform for connecting service providers with users.
                    Our mission is to make home services easily accessible, whether you need a plumber,
                    electrician, or a professional for any other home-related task.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    At Homey, we strive to create a seamless experience for both service providers
                    and users, ensuring a hassle-free process for finding and offering services.
                    Join us in making home services simple and efficient!
                </p>
            </div>
        </section>
    );
};

export default Aboutus;