import type { FC } from 'react'

import { ReactComponent as AccountSvg } from '../../asset/menu/account.svg'
import { ReactComponent as DashboardSvg } from '../../asset/menu/dashboard.svg'
import { ReactComponent as DocumentationSvg } from '../../asset/menu/documentation.svg'
import { ReactComponent as GuideSvg } from '../../asset/menu/guide.svg'
import { ReactComponent as PermissionSvg } from '../../asset/menu/permission.svg'
import {
    PieChartOutlined,
    BookOutlined,
    SnippetsOutlined,
    UsergroupAddOutlined,
    CommentOutlined,
    FileImageOutlined
}
    from '@ant-design/icons'

interface CustomIconProps {
    type: string
}

export const CustomIcon: FC<CustomIconProps> = (props) => {
    const { type } = props
    let com = <GuideSvg />

    if (type === 'menu') {
        com = <BookOutlined />
    } else if (type === 'manage') {
        com = <SnippetsOutlined />
    } else if (type === 'user') {
        com = <UsergroupAddOutlined />
    } else if (type === 'comment') {
        com = <CommentOutlined />
    } else if (type === 'banner') {
        com = <FileImageOutlined />
    } 
    else {
        com = <PieChartOutlined />
    }

    return <span className="anticon">{com}</span>
}
