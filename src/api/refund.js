import {
    request
} from '@/api/request/index.js';

export default {

    applyRefund(data) {

        return request({
            url: '/quxia/api/wx/refund/apply',
            method: 'POST',
            data: data,
        });
    },

    listRefunds(data) {
        return request({
            url: '/quxia/api/wx/refund/tickets',
            data: data,
        });
    },

    getRefund(id) {
        return request({
            url: '/quxia/api/wx/refund/tickets/detail?id=' + id
        });
    },
    cancelRefund(id) {
        return request({
            url: '/quxia/api/wx/refund/tickets/cancel?id=' + id,
            method: 'POST',
            data: { id }
        });
    }
};