import React from "react"
import { BaseTable } from "../../../components/core/table/tableCore"
import { ColumManageMenu } from "./columnManageMenu"
import FormSearch from "../../../components/core/search/formSearch"
import ModalCore from "../../../components/core/modal/modalCore"
import { FormManageMenu } from "./formManagemenu"
import BaseFieldset from "../../../components/core/fieldset"

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
                    <FormManageMenu type="add" />
                </ModalCore>
            </FormSearch>
            <BaseTable columType={ColumManageMenu} dataSource={[]} />
            {/* </BaseFieldset> */}
        </>
    )
}