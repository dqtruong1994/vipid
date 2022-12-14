import { IErrorCode } from './types';

export const GROUP_NOT_EXIST: IErrorCode = {
    code: 'GROUP_NOT_EXIST',
    message: {
        vi: 'Nhóm không tồn tại',
        en: 'Group is not exist',
    },
};

export const GROUP_EXISTING: IErrorCode = {
    code: 'GROUP_NOT_EXIST',
    message: { vi: 'Tên nhóm đã tồn tại', en: 'Group name is exist' },
};
