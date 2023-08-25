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
  const [fileList, setFileList] = useState<any>([]);
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

    const token = LocalStorage("token");
    const urls = await Promise.all(
      newFileList.map(async (val: any) => {
        const formData = new FormData();
        formData.append('files', val?.originFileObj);
        try {
          const response = await axios.post('http://14.225.255.77:8088/e/images', formData, {
            headers: {
              'Authorization': `Bearer ${token}`,
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
    if (image_url && image_url.length > 0 && image_url.length < 10) {
      const fileList = image_url.map((url, index) => ({
        uid: `${index}`,
        name: `image-${index}`,
        status: 'done',
        url,
      }));
      setFileList(fileList as UploadFile<any>[]);
    }
    else if (image_url) {
      const fileList = {
        uid: `1`,
        name: `image-1`,
        status: 'done',
        url: image_url,
      };
      setFileList([fileList]);
    }
    else {

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
