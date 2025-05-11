import React, { useState } from 'react';
import amazon from '../Assets/JobIcons/amazon.svg';
import facebook from '../Assets/JobIcons/facebook.svg';
import google from '../Assets/JobIcons/google.svg';
import linkedin from '../Assets/JobIcons/linkedin.svg';

const JobsComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);
    const [trackedJobs, setTrackedJobs] = useState([]);

    const jobList = [
        {
            id: 1,
            company: 'Amazon',
            title: 'Product Manager',
            description: 'Amazon went public in May 1997...',
            logo: amazon,
        },
        {
            id: 2,
            company: 'Facebook',
            title: 'Product Designer',
            description: 'Facebook, now owned by Meta...',
            logo: facebook,
        },
        {
            id: 3,
            company: 'Google',
            title: 'Part-time UX Designer',
            description: 'Google was founded on September 4, 1998...',
            logo: google,
        },
        {
            id: 4,
            company: 'LinkedIn',
            title: 'Web Designer',
            description: 'LinkedIn is a business and employment-oriented...',
            logo: linkedin,
        },
    ];

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = () => {
        if (searchQuery.trim() === '') return;

        setSearchHistory(prev => {
            const updated = [searchQuery, ...prev.filter(item => item.toLowerCase() !== searchQuery.toLowerCase())];
            return updated.slice(0, 3); // Keep only the last 3 unique entries
        });
    };

    const handleTrackJob = (job) => {
        setTrackedJobs(prev => {
            const alreadyTracked = prev.some(j => j.id === job.id);
            return alreadyTracked ? prev : [...prev, job];
        });
    };

    const filteredJobs = jobList.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='flex gap-32'>
            <div>
                {/* Search Header */}
                <div className='bg-white h-42 mt-15 justify-center w-[800px] ml-28'>
                    <div className='mx-20 justify-center pt-8'>YOUR DREAM JOB IS HERE</div>
                    <div className='bg-[#E4E4E4] h-1 w-[1250px] mt-5 mx-15'></div>

                    {/* Updated Search Form */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSearchSubmit();
                        }}
                        className='flex gap-4 mx-20 mt-5'
                    >
                        <input
                            className='text-gray-400 text-2xl border-white px-3 w-full'
                            type='text'
                            placeholder='Search Jobs'
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
                            Search
                        </button>
                    </form>
                </div>

                {/* Jobs Section */}
                <div className='mt-8 justify-center items-center uppercase ml-[450px] text-xl'>jobs for you</div>
                <div>
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => (
                            <div key={job.id} className='flex h-36 w-[800px] ml-28 mt-8 bg-white justify-between'>
                                <div className='flex'>
                                    <img className='rounded-full h-32 w-20 mx-4 mt-4' src={job.logo} alt={job.company} />
                                    <div className='m-5'>
                                        <h1 className='text-xl'>{job.title}</h1>
                                        <p className='mt-4'>{job.description}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center gap-2 mr-6'>
                                    <button className='bg-blue-600 text-white text-l h-10 w-40 rounded-sm'>More</button>
                                    <button
                                        className='bg-green-600 text-white text-l h-10 w-40 rounded-sm'
                                        onClick={() => handleTrackJob(job)}
                                    >
                                        Track
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='ml-28 mt-8 text-gray-500'>No jobs found for {searchQuery}</div>
                    )}
                </div>
            </div>

            {/* Right Sidebar */}
            <div>
                {/* Post Job Button */}
                <div className='bg-white h-24 w-96 mt-15 justify-center items-center'>
                    <button className='bg-sky-700 text-white h-12 w-80 text-2xl rounded my-5 ml-8 uppercase'>Post a Job</button>
                </div>

                {/* My Searches */}
                <div className='bg-white h-auto w-96 mt-12 justify-center'>
                    <h3 className='uppercase mx-8 pt-6'>My Searches</h3>
                    <div className='ml-10'>
                        {searchHistory.length > 0 ? (
                            searchHistory.map((query, index) => (
                                <div key={index} className='bg-blue-100 h-20 w-80 my-5 rounded p-5'>
                                    <h2 className='capitalize'>{query}</h2>
                                    <h3>Search Term</h3>
                                </div>
                            ))
                        ) : (
                            <div className='text-gray-500 mt-4'>No recent searches</div>
                        )}
                    </div>
                </div>

                {/* Tracked Jobs */}
                <div className='bg-white h-auto w-96 mt-12 justify-center'>
                    <h3 className='uppercase mx-8 pt-6'>Tracked Jobs</h3>
                    <div className='ml-10'>
                        {trackedJobs.length > 0 ? (
                            trackedJobs.map((job) => (
                                <div key={job.id} className='flex bg-white border-1 h-36 w-80 my-5 rounded p-5'>
                                    <img className='rounded-full h-24 w-18 mx-4' src={job.logo} alt={job.company} />
                                    <div>
                                        <h1 className='text-xl mt-3'>{job.title}</h1>
                                        <h3>{job.company}</h3>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='text-gray-500 mt-4'>No tracked jobs yet</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsComponent;

