import React from 'react';
import { Modal } from 'antd';

const SuccessModal = ({ content }) => {
  Modal.success({
    content
  });
};

export default SuccessModal;