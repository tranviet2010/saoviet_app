
import { notification } from 'antd';

const Notifi = (type: "succ" | "error", text: string) => {
    type == "succ" ?
        notification.success({
            message: 'Thành công',
            description: text,
        }) :
        notification.error({
            message: 'Thất bại',
            description: text,
        });
}

export default Notifi;