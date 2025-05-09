import React, { useState } from 'react'
import { Button, Modal, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Flex, message } from 'antd';

function UploadImageModalComponent({ modalOpen, setModalOpen, sendStatus }) {
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
                <App sendStatus={sendStatus} />
            </Modal>
        </>
    );
}

export default UploadImageModalComponent


const App = ({ sendStatus }) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );
    const handleChange = (info) => {
        if (info.file.status === 'done') {
            const response = info.file.response;
            console.log('Image URL:', response.img_url);
            console.log('Delete URL:', response.img_delete_url);
            console.log('Viewer URL:', response.img_viewer_url);

            // Set the image for preview
            if (response?.img_url) {
                setImageUrl(response.img_url);
            }
        } else if (info.file.status === 'error') {
            console.error('Upload failed:', info.file.error);
        }
    };

    return (
        <Flex gap="middle" wrap>
            <Upload
                name="image"
                listType="picture-circle"
                className="avatar-uploader"
                showUploadList={false}
                action="http://localhost:3000/upload"
                onChange={handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
        </Flex>
    );
};