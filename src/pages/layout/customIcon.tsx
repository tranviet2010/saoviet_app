import type { FC } from 'react'

import { ReactComponent as AccountSvg } from '../../asset/menu/account.svg'
import { ReactComponent as DashboardSvg } from '../../asset/menu/dashboard.svg'
import { ReactComponent as DocumentationSvg } from '../../asset/menu/documentation.svg'
import { ReactComponent as GuideSvg } from '../../asset/menu/guide.svg'
import { ReactComponent as PermissionSvg } from '../../asset/menu/permission.svg'
import { PieChartOutlined } from '@ant-design/icons'

interface CustomIconProps {
    type: string
}

export const CustomIcon: FC<CustomIconProps> = (props) => {
    const { type } = props
    let com = <GuideSvg />

    if (type === 'guide') {
        com = <GuideSvg />
    } else if (type === 'permission') {
        com = <PieChartOutlined />
    } else if (type === 'dashboard') {
        com = <DashboardSvg />
    } else if (type === 'account') {
        com = <AccountSvg />
    } else if (type === 'documentation') {
        com = <DocumentationSvg />
    } else {
        com = <PieChartOutlined />
    }

    return <span className="anticon">{com}</span>
}
