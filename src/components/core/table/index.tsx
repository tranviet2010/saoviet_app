import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Popconfirm, Select, Table, Typography } from 'antd';
import { ButtonCore } from '../button/buttonCore';

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}
interface DataType {
  key: React.Key;
  name: string;
  age: string;
  address: string;
  render?: any
}

const originData: Item[] = [];

for (let i = 0; i < 0; i++) {
  originData.push({
    key: i.toString(),
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text' | 'option';
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : inputType == 'option' ?
    <Select
      allowClear
    >
      <Select.Option value="noname">no name</Select.Option>
    </Select>
    : <Input />
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const TableCore = ({ column }: any) => {
  const [form] = Form.useForm();
  const [data, setData] = useState<any>(originData);
  const [editingKey, setEditingKey] = useState('');
  const [count, setCount] = useState(2);

  const isEditing = (record: Item) => record.key === editingKey;
  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({ name: '', age: '', address: '', ...record });
    setEditingKey(record.key);
  };

  const cancel = (item: any) => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
    }
  }

  const columns = [
    ...column,
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              Lưu
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={(record) => cancel(record)}>
              <a>hủy</a>
            </Popconfirm>
          </span>
        ) : null;
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex == 'name' ? 'option' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    }
  })
  const handleAdd = () => {
    const newData: any = {
      key: Math.random(),
      name: "",
      age: '',
      address: ``,
    };
    // EditableCell()
    setData([...data, newData]);
    setCount(count + 1);
    edit(newData)
  }
  return (
    <>
      <ButtonCore onClick={handleAdd} style={{ marginBottom: 16 }}>
        + Thêm mới menu
      </ButtonCore>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </>
  );
};

export default TableCore;