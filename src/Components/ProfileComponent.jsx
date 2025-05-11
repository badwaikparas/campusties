import React from 'react'
import ProfileCard from './common/Profile/ProfileCard';
import ProfileAboutCard from './common/Profile/ProfileAboutCard';
import Card from './common/Card';
import ProfileProject from './common/Profile/ProfileProject';
import ProfileSkills from './common/Profile/ProfileSkills';
import ProfileExperience from './common/Profile/ProfileExperience';
import ProfileEducation from './common/Profile/ProfileEducation';
import ProfileDashboard from './common/Profile/ProfileDashboard';
import ProfileVisitors from './common/Profile/ProfileVisitors';
import ProfileBlogs from './common/Profile/ProfileBlogs';

export default function ProfileComponent({ currentUser }) {
    console.log(JSON.stringify(currentUser));

    return (
        <div className='flex justify-center'>
            <div className='flex justify-center items-start overflow-y-auto gap-8 p-4 w-3/4'>
                {/* Left */}
                <div className='w-full'>
                    <Card paddingX={0} paddingY={0}>
                        <ProfileCard currentUser={currentUser} />
                    </Card>
                    <Card paddingX={30} paddingY={30}>
                        <ProfileAboutCard />
                    </Card>

                    {/* Projects Section */}
                    <Card paddingX={30} paddingY={30}>
                        <ProfileProject />
                    </Card>

                    <Card paddingX={30} paddingY={30}>
                        <ProfileSkills />
                    </Card>

                    <Card paddingX={30} paddingY={30}>
                        <ProfileExperience />
                    </Card>
                    <Card paddingX={30} paddingY={30}>
                        <ProfileEducation />
                    </Card>
                </div>
                {/* Right */}
                <div className='w-[400px]  '>
                    <Card paddingX={30} paddingY={30}>
                        <ProfileDashboard />
                    </Card>
                    <Card paddingX={30} paddingY={30}>
                        <ProfileVisitors />
                    </Card>
                    <Card paddingX={30} paddingY={30}>
                        <ProfileBlogs />
                    </Card>
                </div>
            </div>
        </div>
    )
}
