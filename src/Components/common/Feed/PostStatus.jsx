import React, { useState, useEffect } from 'react'
import ModalComponent from '../ModalComponent'
import { PostStatusFunction, GetPostsFunction } from '../../../API/FireStoreAPI';
import { getCurrentTimeStamp, getDateObjectFromMoment } from '../../../Helpers/useMoment';
import { getUniqueID } from '../../../Helpers/getUniqueId';
import PostCard from '../PostCard';
export default function PostStatus({ currentUser }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [allPosts, setAllPosts] = useState([])
    const sendStatus = async (status) => {
        console.log(currentUser);

        let object = {
            status: status,
            timeStamp: getCurrentTimeStamp('LLL'),
            userEmail: localStorage.getItem('userEmail'),
            username: currentUser.name,
            postID: getUniqueID()
        }

        await PostStatusFunction(object)
        setModalOpen(false)
    }

    useEffect(() => {
        GetPostsFunction(setAllPosts)
    }, [])

    return (
        <div className='flex flex-col justify-center items-center w-[50%]'>
            <div className='w-full h-[120px] bg-slate-100 mt-[30px] rounded-4xl flex justify-center items-center'>
                <button className='border-2 border-slate-200 w-[80%] h-[40px] text-left outline-none rounded-3xl px-3 cursor-pointer font-semibold hover:bg-slate-200'
                    style={{
                        color: "rgba(0,0,0,0.69)",
                        fontSize: "14px"
                    }}
                    onClick={() => setModalOpen(true)}
                >Start a Post</button>
            </div>

            <ModalComponent modalOpen={modalOpen} setModalOpen={setModalOpen} sendStatus={sendStatus} />

            {/* LODING ALL THE POSTS */}
            <div className='flex flex-col justify-center items-center'>
                {allPosts
                    .sort((a, b) => {
                        const dateA = getDateObjectFromMoment(a.timeStamp);
                        const dateB = getDateObjectFromMoment(b.timeStamp);
                        // console.log("a.timeStamp:", a.timeStamp);
                        // console.log("b.timeStamp:", b.timeStamp);
                        return dateB - dateA;
                    })
                    .map((post) => {
                        return <PostCard post={post} key={post.id} />;
                    })
                }
            </div>
        </div>
    )
}
