import { Grid, Paper } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Loading } from '../../../../components';
import { useAllGroupUserQuery } from '../../../../generated/graphql';
import { EmptyData } from '../empty-data';
import { GroupItem } from './group-item';

function Groups() {
    const { t } = useTranslation('group');

    const { loading, data, error } = useAllGroupUserQuery();

    if (loading) {
        return <Loading full />;
    }
    if (error) {
        return (
            <Paper>
                <EmptyData>{t('error_group')}</EmptyData>
            </Paper>
        );
    }

    const groups = data?.allGroupUser.data;

    if (!groups || groups.length === 0) {
        return (
            <Paper>
                <EmptyData>{t('empty_group')}</EmptyData>
            </Paper>
        );
    }

    return (
        <Grid container spacing={2}>
            {groups.map((group) => {
                return (
                    <Grid item key={group._id} xs={12} sm={6}>
                        <GroupItem group={group} />
                    </Grid>
                );
            })}
        </Grid>
    );
}

export { Groups };
