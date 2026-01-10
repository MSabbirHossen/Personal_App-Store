import React from 'react';

const AppCommonData = ({ data }) => {
    return (
        <div className=" flex items-center justify-center gap-4 sm:gap-6 md:gap-8 md:flex-row">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 text-center border border-gray-300">
                <div className="text-2xl sm:text-3xl mb-2 text-gray-700">
                  {data.icon}
                </div>
                <div className="text-xs sm:text-sm opacity-75 font-semibold text-gray-600">
                  {data.text}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  {data.count}
                </div>
              </div>
            
        </div>
    );
};

export default AppCommonData;