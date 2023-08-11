import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal, Upload, message } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import axios from 'axios';
import { LocalStorage } from '../../../utils/convertData';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

interface UpLoadFileProps {
  onchange: (fileList: UploadFile[]) => void;
  image_url?: string[];
}


const UpLoadFileMain: React.FC<UpLoadFileProps> = ({ onchange, image_url }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };
  const handleChange: UploadProps['onChange'] = async ({ fileList: newFileList }) => {
    setFileList(newFileList)

    const token = LocalStorage("token")?.slice(1, -1)
    const urls = await Promise.all(
      newFileList.map(async (val: any) => {
        const formData = new FormData();
        formData.append('file', val?.originFileObj);
        try {
          const response = await axios.post('http://172.105.236.195/api/v1/upload', formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return response.data.data.Location; // Assuming the API returns a 'url' property in the response data
        } catch (error) {
          return null;
        }
      })
    );
    onchange(urls)

  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  useEffect(() => {
    if (image_url && image_url.length > 0) {
      const fileList = image_url.map((url, index) => ({
        uid: `${index}`,
        name: `image-${index}`,
        status: 'done',
        url,
      }));
      setFileList(fileList as UploadFile<any>[]);
    }
  }, []);
  return (
    <>
      <p>Ảnh thiết bị</p>
      <Upload action="" listType="picture-card" fileList={fileList} onPreview={handlePreview} onChange={handleChange}>
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default UpLoadFileMain;
