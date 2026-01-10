import React from 'react';
import { useLoaderData } from 'react-router';
import { CiSearch } from "react-icons/ci";
import AppCard from '../../components/AppCard/AppCard';

const AllApps = () => {
    const data = useLoaderData();
    // const {companyName,description,downloads,id,image,ratingAvg,ratings,reviews,size,title} = data
    // console.log("🚀 ~ AllApps ~ data:", data)
    return (
        <div className='w-5/6 mx-auto '>
            <div className='text-center m-4'>
                <h1 className='text-3xl font-bold'>Our All Applications</h1>
            <p className='font-semibold m-2'>Explore all the applications available in our store.</p>
            </div>
            <div className='m-4 flex justify-center md:justify-between items-center flex-col md:flex-row gap-3'>
                <span className='font-bold text-xl'>{data.length} Apps Found</span>
                <div className='relative'>
                    <CiSearch className='absolute left-2 top-2.5' />
                    <input className='outline p-2 pl-8 rounded-lg' type="text" placeholder='Search apps...' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                {data.map(app => (
                    <AppCard key={app.id} app={app} />
                ))}
            </div>
        </div>
    );
};

export default AllApps;