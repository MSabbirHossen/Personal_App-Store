import React from 'react';
import AppDetailsHeader from './AppDetailsHeader';
import { Navigate } from 'react-router';
import AppDetailsContent from './AppDetailsContent';

const AppDetails = () => {
    return (
        <div className='w-5/6 mx-auto'>            
        <button
          className="px-4 py-2 text-indigo-600 font-semibold hover:bg-white rounded-lg transition-all duration-300 mb-6 sm:mb-8 flex items-center gap-2"
          onClick={() => Navigate("/apps")}
        >
          ← Back to All Apps
        </button>
            <AppDetailsHeader />
            <AppDetailsContent/>
            
        </div>
    );
};

export default AppDetails;