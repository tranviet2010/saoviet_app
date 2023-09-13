import { DatePicker, Form, Input, Radio, Select, Switch } from 'antd';
import dayjs from 'dayjs';
import moment from 'moment';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MainColor } from '../variable/variable';

interface IMyObject {
    _id?: any
    name?: string
    autoid?: any
}

export interface fromInput {
    type: 'input' | 'option' | 'radio' | 'date' | 'switch';
    label?: string;
    name?: string;
    rules?: Function;
    required?: Boolean | any;
    disable?: Boolean | any;
    placeholder?: string;
    data?: IMyObject[];
    typeParam?: any;
    onChange?: any;
    message?: string;
    style?: any;
    props?: any;
    mode?: 'multiple' | 'tags' | any;
    active?: boolean;
    isService?: boolean;
    labelColStyle?: any;
    password?: string;
    getId?: boolean
}

export const FormInputStyle = styled.div`
    path {
    color: ${MainColor};
    }
    .ant-row.ant-form-item-row{
        display: block;
        .ant-form-item-label{
            font-size: 13px;
            font-weight: bold;
        }

    }

  .ant-col.ant-form-item-label {
    width: 10rem;
    text-align: inherit;
    ::after {
      display: none !important;
    }
  }
`;
const BaseFormInput = ({
    label,
    name,
    type,
    required,
    disable,
    placeholder,
    data,
    typeParam,
    onChange,
    message,
    style,
    mode,
    active,
    getId,
    labelColStyle,
    password
}: fromInput) => {
    const dataParam = useSelector((state: any) => state.usersSlice.param);

    const dataPramType = data ? data : dataParam[typeParam];
    const dateFormatList = 'YYYY/MM/DD';

    
    return (
        <FormInputStyle>
            {
                type == 'switch' ?
                    <Form.Item label={label} name={name} rules={[{ required: required, message }]} valuePropName="checked">
                        <Switch disabled={disable} />
                    </Form.Item> :
                    <Form.Item label={label} name={name} rules={[{ required: required, message }]} labelCol={labelColStyle}>
                        {type == 'input' ? (
                            <Input
                                disabled={disable}
                                placeholder={placeholder}
                                onChange={onChange}
                                style={style}
                                type={password}
                            />
                        ) : type == 'option' ? (
                            <Select
                                allowClear
                                showSearch
                                optionFilterProp='children'
                                onChange={onChange}
                                placeholder={placeholder}
                                style={style}
                                mode={mode}
                                disabled={disable}>
                                {dataPramType?.map((val: any) => (
                                    <Select.Option key={val?.autoid} value={getId ? val?.id : (val?.autoid || val?.value)}>{val?.value}</Select.Option>
                                ))}
                            </Select>
                        ) : type == 'date' ? (
                            <DatePicker
                                style={{ width: '100%' }}
                                placeholder="Chọn ngày"
                                format={dateFormatList}

                            />
                        ) : (
                            <Radio.Group>
                                {data?.map((val) => (
                                    <Radio key={val?._id} value={val._id}>{val.name}</Radio>
                                ))}
                            </Radio.Group>
                        )}
                    </Form.Item>}

        </FormInputStyle>
    );
};

export default BaseFormInput;
