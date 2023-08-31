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
    password?: string
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
    labelColStyle,
    password
}: fromInput) => {
    const dataParam = useSelector((state: any) => state.usersSlice.param);

    const dataPramType = data ? data : dataParam[typeParam];
    const dateFormatList = 'DD/MM/YYYY';

    const presets: any = [
        { label: 'Hôm qua', value: moment().subtract(-1, 'days') },
        { label: 'Tuần trước', value: moment().subtract(-7, 'week') },
        { label: 'Tháng trước', value: moment().subtract(-1, 'month') },
    ]
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
                                filterOption={(input, option: any) => (option?.name ?? '')?.includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.name ?? '').toLowerCase().localeCompare((optionB?.name ?? '').toLowerCase())
                                }
                                onChange={onChange}
                                placeholder={placeholder}
                                mode={mode}
                                disabled={disable}>
                                {dataPramType?.map((val: any) => (
                                    <Select.Option key={val?.autoid} value={val?.autoid || val?.value}>{val?.value}</Select.Option>
                                ))}
                            </Select>
                        ) : type == 'date' ? (
                            <DatePicker
                                style={{ width: '100%' }}
                                presets={presets}
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
