import { request } from './request/index.js';

export default {
    getAds(data) {
        return request({
            url: '/quxia/api/public/ads',
            data
        })
    }
}

