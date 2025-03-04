import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const ModalComponent = ({ modalOpen, setModalOpen, sendStatus }) => {
    const [postMessage, setPostMessage] = useState("")
    return (
        <>
            <Modal
                title="Create a Post"
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
                footer={[
                    <Button key="submit" type="primary" disabled={!postMessage}
                        onClick={async () => {
                            await sendStatus(postMessage)
                            setPostMessage("")
                        }}>
                        Post
                    </Button>,
                ]}
            >
                <input type="text" placeholder='What do you want to talk about?' className='border-0 bg-white outline-none text-black text-[16px] w-full'
                    value={postMessage} onChange={(e) => setPostMessage(e.target.value)} />
            </Modal>
        </>
    );
};
export default ModalComponent;