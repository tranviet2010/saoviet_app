import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal, Upload, message } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import axios from 'axios';
import { LocalStorage } from '../../../utils/convertData';
import styled from 'styled-components';

const StyleUploadFile = styled.div`
  p{
    font-size: 13px;
    font-weight: bold;
  }
`

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
  title?: string
}


const UpLoadFile: React.FC<UpLoadFileProps> = ({ onchange, image_url, title }) => {
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
        formData.append('files', val?.originFileObj);
        try {
          const response = await axios.post('http://14.225.255.77:8088/e/images', formData, {
            headers: {
              'Authorization': `Bearer eyJ1c2VyLWlkIjo0LCJtb2JpbGUiOiIwOTQzODE4MTkxIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJsb2dpbiIsIk1vYmlsZU51bWJlciI6IjA5NDM4MTgxOTEiLCJyb2xlIjpbIlNZU1RFTSJdLCJpc19hY3RpdmF0ZWQiOiIxIiwibmlja25hbWUiOiJodW5ndm0iLCJ0eXAiOiJCZWFyZXIiLCJmdWxsbmFtZSI6IlZ1IE1hbmggSHVuZyIsInByZWZlcnJlZF91c2VybmFtZSI6Imh1bmd2bSIsImV4cCI6MTY5MjYyNzEzOCwiY3VzdF9pZCI6IjQiLCJpYXQiOjE2OTI2MjY5NTgsImVtYWlsIjoiaHVuZ3ZtQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiMDk0MzgxODE5MSIsImp0aSI6Ijk0NTU3NjdhLThkY2UtNDgxMy05NWUwLTJiZDgxYmYyY2FlOSJ9.oRu3yxcs-sFrsJQCq2B1th7mmPUNmsmQhR9npzNZQouseP8gBag7WzWI3pb7R5RKS3rs5Et2ZYxX8TNW6uE5GzcjmQu-ThFkVW8o882ZkMGL-_3x-5Um-PjoZaxRLS0M3r3aFCUP_QI6RWcbxA9lH2r1zZuGtCDBsyaAVKm6jeDq8a5Xl0eQjwEXFjPXAQuNVJYoLWZF1_ZqGlapsC3_oJL51-n_qYLxKR9LUSp2yqzzxgg-U470utJNNC5Dqfe9xuYmqjOy1pOcu0ItGBSb-Jq5KKPbfn5OZrSt643GEzGLde3BN4kGYVgqEbxigS965cBsgv4QzOWFMmepYC_prQ`,
            },
          });
          return response.data[0]; // Assuming the API returns a 'url' property in the response data
        } catch (error) {
          return null;
        }
      })
    )
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
    <StyleUploadFile>
      <p>{title}</p>
      <Upload action="" listType="picture-card" fileList={fileList} onPreview={handlePreview} onChange={handleChange} maxCount={1}>
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </StyleUploadFile>
  );
};

export default UpLoadFile;
