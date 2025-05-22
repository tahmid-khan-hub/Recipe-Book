import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <span className="loading loading-spinner loading-xl text-success"></span>
        </div>
    );
};

export default Loader;