import React from 'react';

const NoMatch = () => {
    return (
        <div className="noMatch-area container text-center mt-5 border border-3">
            <h1>Opsss... Sorry! Error <span className="text-danger">404</span> </h1>
            <h3 className="text-danger">Page Not Found</h3>
        </div>
    );
};

export default NoMatch;