import { Alert, AlertTitle, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { get } from 'lodash';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard, useMessage } from '../../../../components';
import { ecommerceList, socialLists } from '../../constants';

interface Props {
    socialType: string;
}

const useStyles = makeStyles({
    root: {
        marginTop: 15,
    },
});

const Note = ({ socialType }: Props) => {
    const message = useMessage()
    const { t } = useTranslation();
    const classes = useStyles();
    const note = get(socialLists, [socialType, 'note']) || get(ecommerceList, [socialType, 'note']);

    if (!note) {
        return <></>;
    }

    const handleCopy = () => {
        message(t('copy.message'), { variant: 'success' })
    }

    return (
        <Alert severity="info" className={classes.root}>
            <AlertTitle>{t('note')}</AlertTitle>
            <CopyToClipboard onCopy={handleCopy} text={note}>
                <Typography variant='body1' sx={{ cursor: 'pointer' }}>
                    {note} -  ({t('copy').toLowerCase()})
                </Typography>
            </CopyToClipboard>
        </Alert >
    );
};

export { Note };
