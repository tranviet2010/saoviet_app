import { useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import ModalCore from "../../components/core/modal/modalCore"
import { BaseTable } from "../../components/core/table/tableCore"
import BaseFieldset from "../../components/core/fieldset"
import { getPartnerSchool } from "../../api/partner.api"
import { paginationShared } from "../../components/core/variable/variable"
import { ColumnBanner } from "./column.banner"
import { getBanner } from "../../api/banner.api"
import { FormBanner } from "./form.banner"
import axios from "axios"


export default function Bannner() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState(paginationShared)

    useEffect(() => {
        getBanner(paginationShared).then((res) => {
            console.log("Res==",res);
            setData(res?.data?.data)
        })
        // let config = {
        //     method: 'get',
        //     // maxBodyLength: Infinity,
        //     url: 'http://14.225.255.77:8088/e/admin/banners?page=1&limit=5',
        //     headers: { 
        //       'Authorization': 'Bearer eyJ1c2VyLWlkIjoyLCJtb2JpbGUiOiIwOTQzODE4MTkzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJsb2dpbiIsIk1vYmlsZU51bWJlciI6IjA5NDM4MTgxOTMiLCJyb2xlIjpbIlBBUlRORVJfQURNSU4iXSwiaXNfYWN0aXZhdGVkIjoiMSIsIm5pY2tuYW1lIjoiaHVuZ3ZtMiIsInR5cCI6IkJlYXJlciIsImZ1bGxuYW1lIjoiVnUgTWFuaCBIdW5nIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiaHVuZ3ZtMiIsImV4cCI6MTY5MTkxNTUzOSwiY3VzdF9pZCI6IjIiLCJpYXQiOjE2OTE5MTUzNTksImVtYWlsIjoiaHVuZ3ZtMkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IjA5NDM4MTgxOTMiLCJqdGkiOiI0M2NmNzkxYi04ZjIzLTRlYjgtYjQ4ZS1mYzg3NTNlMDcxNjIifQ.wb4egtmCcSuMJerhOIzL-yzZsToz20xAfnKxPbFmKa7m2OwtF9KrzYNYQpeIu3UER9WBK6YSmRLUaommlmun4UKok83LrL1Svwh8ROfj_6A2tTlzFQ9unnxB8_sGy3reo1XfRLFQiMAOaj7rbnW_a2nge1xhmofFS_1S56VZqtGCNN2pfs573fw109OWVS32G93d0h9EGUeRLA3y_v5ZkEMgXS1uWI1cqBGYHSKTVqj8dH9l_cJ0n5KiUTnw9asJ-NQqnSG39MFftgdcHRwJHetI8s6QNP1YrDkX3m6dLKpNd1BJZHJeynS6pGT-1-ghyZ8DAmnutPj5YsZ_91fWFw'
              
        //     }
        //   };
        //   axios.request(config)
        //   .then((response) => {
        //     console.log(JSON.stringify(response.data));
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
    }, [])
    return (
        <>
            {/* <BaseFieldset title="Quản lý thực đơn"> */}
            <FormSearch>
                <ModalCore
                    nameButton="Thêm mới"
                    // title="+ Thêm thực đơn và món ăn"
                    title="+ Thêm mới banner"
                    width={1200}
                >
                    <FormBanner
                        type="add"
                        urlAdd="banner"
                    />
                </ModalCore>
            </FormSearch>
            <BaseTable columType={ColumnBanner} dataSource={data} />
            {/* </BaseFieldset> */}
        </>
    )
}