import React, { useState } from 'react';
import { Modal } from 'antd';
const ModalComponent = ({ modalOpen, setModalOpen }) => {
    return (
        <>
            <Modal
                title="Create a Post"
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
            >
                <input type="text" placeholder='What do you want to talk about?' />
            </Modal>
        </>
    );
};
export default ModalComponent;