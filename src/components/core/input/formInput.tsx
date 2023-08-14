import { DatePicker, Form, Input, Radio, Select, Switch } from 'antd';
import dayjs from 'dayjs';
import moment from 'moment';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MainColor } from '../variable/variable';

interface IMyObject {
    _id: any;
    name: string;
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
}

const FormInputStyle = styled.div`
    path {
    color: ${MainColor};
}
  .ant-col.ant-form-item-label {
    width: 7rem;
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
    labelColStyle
}: fromInput) => {
    // const dataParam = useSelector((state: State) => state.usersSlice.param);
    // const dataPramType = data ? data : dataParam[typeParam];
    const dataPramType = data;
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
                            />
                        ) : type == 'option' ? (
                            <Select
                                allowClear
                                onChange={onChange}
                                placeholder={placeholder}
                                mode={mode}
                                disabled={disable}>
                                {dataPramType?.map((val: any) => (
                                    <Select.Option key={val?._id} value={val?._id}>{val?.name}</Select.Option>
                                ))}
                            </Select>
                        ) : type == 'date' ? (
                            <DatePicker
                                style={{ width: '100%' }}
                                presets={presets}
                                placeholder={placeholder}
                                format={dateFormatList}
                                renderExtraFooter={() => 'Hallo Telecom'}

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
