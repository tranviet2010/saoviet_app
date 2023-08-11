import { BaseTable } from "../../../components/core/table/tableCore"
import FormSearch from "../../../components/core/search/formSearch"
import ModalCore from "../../../components/core/modal/modalCore"
import { ColumDetailManageMenu } from "./columnDetailMenu"
import { FormDetailManageMenu } from "./formDetailMenu"

export default function ManageMenu() {
    return (
        <>
            {/* <BaseFieldset title="Quản lý thực đơn"> */}
            <FormSearch>
                <ModalCore
                    nameButton="Thêm mới"
                    title="Thêm mới nhân viên"
                    width={750}
                >
                    <FormDetailManageMenu type="add" />
                </ModalCore>
            </FormSearch>
            <BaseTable columType={ColumDetailManageMenu} dataSource={[]} />
            {/* </BaseFieldset> */}
        </>
    )
}