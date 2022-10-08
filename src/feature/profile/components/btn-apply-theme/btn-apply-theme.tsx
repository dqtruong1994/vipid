import { CircularProgress } from '@mui/material';
import React from 'react';
import { useAuth } from '../../../../context';
import { useMessage } from '../../../../components';
import { useChangeDefaultThemeMutation } from '../../../../generated/graphql';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Props {
    children: JSX.Element;
    themeId?: string;
}

const BtnApplyTheme = ({ children, themeId }: Props) => {
    const { t } = useTranslation('theme');
    const message = useMessage();
    const navigate = useNavigate();
    const { updateInfo } = useAuth();

    const [changeDefaultTheme, { loading }] = useChangeDefaultThemeMutation({
        onError(err) {
            message(t('change_config.error'), { variant: 'error' });
        },
        onCompleted(data) {
            if (data.changeDefaultTheme?.success) {
                message('Đã thay đổi giao diện', {
                    variant: 'success',
                });

                updateInfo(data.changeDefaultTheme?.user);
                navigate('/themes');
            } else {
                message(t('change_config.error'), { variant: 'error' });
            }
        },
    });

    const handleClick = () => {
        if (themeId) {
            changeDefaultTheme({
                variables: { themeId },
            });
        }
    };
    return (
        <>
            {loading
                ? React.cloneElement(children, {
                      children: <CircularProgress size={20} />,
                      disabled: loading,
                  })
                : React.cloneElement(children, {
                      onClick: handleClick,
                      disabled: !themeId,
                  })}
        </>
    );
};

export { BtnApplyTheme };
