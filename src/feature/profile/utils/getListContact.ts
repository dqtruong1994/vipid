import {
    bankLists,
    socialLists,
    emailList,
    addressList,
    phoneList,
    servicesList,
    websiteList,
    taxcodeList,
    ecommerceList,
} from '../constants';

export enum ETypeContact {
    Bank = 'bank',
    Email = 'email',
    Phone = 'phone',
    Address = 'address',
    Services = 'services',
    Website = 'website',
    Taxcode = 'taxcode',
    Ecommerce = 'ecommerce',
}

export function getListContact(type: ETypeContact) {
    if (type === ETypeContact.Bank) {
        return bankLists;
    }
    if (type === ETypeContact.Email) {
        return emailList;
    }
    if (type === ETypeContact.Phone) {
        return phoneList;
    }
    if (type === ETypeContact.Address) {
        return addressList;
    }

    if (type === ETypeContact.Services) {
        return servicesList;
    }

    if (type === ETypeContact.Website) {
        return websiteList;
    }

    if (type === ETypeContact.Taxcode) {
        return taxcodeList;
    }

    if (type === ETypeContact.Ecommerce) {
        return ecommerceList;
    }

    return socialLists;
}
