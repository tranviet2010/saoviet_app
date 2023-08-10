import type { FC, ReactElement } from 'react';

import { useIntl } from 'react-intl';

import PrivateRoute from './pravateRoute';


export const useLocale = () => {
    const { formatMessage: _formatMessage, ...rest } = useIntl();
    const formatMessage: any = _formatMessage;
  
    return {
      ...rest,
      formatMessage,
    };
  };


const WrapperRouteComponent: FC<any> = ({ titleId, auth, ...props }) => {
    const { formatMessage } = useIntl();

    if (titleId) {
        document.title = formatMessage({
            id: titleId,
        });
    }
    return auth ? <PrivateRoute {...props} /> : (props.element as ReactElement);
};

export default WrapperRouteComponent;