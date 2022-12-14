import { Button, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ItemList } from '../../../../collection';
import { useAuth } from '../../../../context';
import { useRemoveContactItemMutation } from '../../../../generated/graphql';

interface Props {
    item: ItemList;
    toggle: () => void;
}

const RemoveBtn = ({ item, toggle }: Props) => {
    const { t } = useTranslation();
    const { updateInfo } = useAuth();
    const [removeInfo, { loading }] = useRemoveContactItemMutation({
        onCompleted(data) {
            if (data.removeContactItem?.success) {
                updateInfo(data.removeContactItem.user);
                toggle();
            }
        },
    });

    const onClick = () => {
        removeInfo({
            variables: {
                idContactItem: item._id,
            },
        });
    };
    return (
        <Button
            color="secondary"
            variant="outlined"
            size="large"
            onClick={onClick}
            //   startIcon={!loading && <HighlightOffIcon />}
            fullWidth
        >
            {loading ? <CircularProgress size={20} /> : t('delete')}
        </Button>
    );
};

export { RemoveBtn };
