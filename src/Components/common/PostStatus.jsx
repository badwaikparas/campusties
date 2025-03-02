import React, { useState } from 'react'
import ModalComponent from './ModalComponent'
import { PostStatusFunction } from '../../API/FireStoreAPI';
export default function PostStatus() {
    const [modalOpen, setModalOpen] = useState(false);
    const sendStatus = (status) => {
        console.log("Post Sent");
        PostStatusFunction(status)
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='w-[80%] h-[120px] bg-slate-100 mt-[30px] rounded-4xl flex justify-center items-center'>
                <button className='border-2 border-slate-200 w-[80%] h-[40px] text-left outline-none rounded-3xl px-3 cursor-pointer font-semibold hover:bg-slate-200'
                    style={{
                        color: "rgba(0,0,0,0.69)",
                        fontSize: "14px"
                    }}
                    onClick={() => setModalOpen(true)}
                >Start a Post</button>
            </div>

            <ModalComponent modalOpen={modalOpen} setModalOpen={setModalOpen} sendStatus={sendStatus} />
        </div>
    )
}
