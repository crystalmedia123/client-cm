import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../../static/images/not-found.gif';

const PageLoad = () => {
  return (
    <div className="bg-body">
      <img src={NotFound} alt="dash" />
      <Link to="/dashboard" className="pageload-btn">
        Back To Home Page
      </Link>
      {/* <button>Back To Home Page </button> */}
    </div>
  );
};

export default PageLoad;
