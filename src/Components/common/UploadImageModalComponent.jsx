import React, { useState } from 'react'
import { Button, Modal, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Flex, message } from 'antd';
import { PostCurrentUserProfileImgUrl, PostCurrentUserProfileCoverImgUrl } from '../../API/FireStoreAPI';

function UploadImageModalComponent({ modalOpen, setModalOpen, currentUser }) {
    const [postMessage, setPostMessage] = useState("");
    return (
        <>
            <Modal
                title="Upload Profile Photo"
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
                footer=""
            >
                <App currentUser={currentUser} />
            </Modal>
        </>
    );
}

export default UploadImageModalComponent


const App = ({ currentUser }) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [coverImageUrl, setCoverImageUrl] = useState();
    // const [imageDeleteUrl, setDeleteImageUrl] = useState();

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );
    const handleChange = async (info, parameter) => {
        // if (imageDeleteUrl) {
        //     const response = await fetch('http://localhost:3000/delete', {
        //         method: 'DELETE',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ url: imageDeleteUrl }),
        //     });

        //     const result = await response.json(); // Recommended: parse and use response
        //     console.log(result);
        // }
        if (info.file.status === 'done') {
            const response = info.file.response;
            console.log('Image URL:', response.img_url);
            console.log('Delete URL:', response.img_delete_url);
            console.log('Viewer URL:', response.img_viewer_url);

            // Set the image for preview
            if (response?.img_url) {

                if (parameter === 'dp') {
                    try {
                        PostCurrentUserProfileImgUrl(response.img_url, response.img_delete_url)
                    } catch (error) {
                        console.log("Post Image URL API failed")
                    }
                    setImageUrl(response.img_url);
                    // setDeleteImageUrl(response.img_delete_url);
                }
                if (parameter === 'cp') {
                    try {
                        PostCurrentUserProfileCoverImgUrl(response.img_url, response.img_delete_url)
                    } catch (error) {
                        console.log("Post Image URL API failed")
                    }
                    setCoverImageUrl(response.img_url)
                }

            }
        } else if (info.file.status === 'error') {
            console.error('Upload failed:', info.file.error);
        }
    };

    return (
        <Flex gap="middle" wrap>
            <div className='flex flex-col items-center'>
                <Upload
                    name="image"
                    listType="picture-circle"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="http://localhost:3000/upload"
                    onChange={(info) => handleChange(info, 'dp')} // for display photo
                >
                    {currentUser.profilePictureUrl ? <img src={currentUser.profilePictureUrl} alt="avatar" className='rounded-full object-cover w-full h-full' /> : uploadButton}
                </Upload>
                <p>Profile Photo</p>
            </div>
            <div className='flex flex-col items-center'>
                <Upload
                    name="image"
                    listType="picture-circle"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="http://localhost:3000/upload"
                    onChange={(info) => handleChange(info, 'cp')} // for cover photo
                >
                    {currentUser.profileCoverPictureUrl ? <img src={currentUser.profileCoverPictureUrl} alt="avatar" className='rounded-full object-cover w-full h-full' /> : uploadButton}
                </Upload>
                <p>Cover Photo</p>
            </div>
        </Flex>
    );
};