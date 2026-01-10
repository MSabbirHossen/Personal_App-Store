import React from 'react';
import { useLoaderData } from 'react-router';

const AllApps = () => {
    const data = useLoaderData();
    console.log("🚀 ~ AllApps ~ data:", data)
    return (
        <div>
            All apps are here
        </div>
    );
};

export default AllApps;