import { DOMAIN } from '../constants';

export const getUrlUser = ({
    code,
    idRegister,
    userBuyCardGroupId,
}: {
    code?: string;
    idRegister: string;
    userBuyCardGroupId?: string;
}): string => {
    const endpoind = !!userBuyCardGroupId ? `${code}` : `user/${idRegister}`;
    return `${DOMAIN}/${endpoind}`;
};
