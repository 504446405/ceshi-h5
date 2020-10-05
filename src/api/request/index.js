

import {
	baseUrl
} from '../../config.js'
// 1 同时发送出去的异步请求的个数
let ajaxTimes = 0;
export const request = (params) => {
	let token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsid3giLCJjdXN0b21lcl9hbGkiLCJxdXhpYS13eCIsIm1lcmNoYW50LWFwaSIsImFkbWluIiwicHJvbW90ZXIiLCJ0b25nY2hlbmctd3giLCJtZXJjaGFudC1hZG1pbiJdLCJleHAiOjE2MDE5MjgyNTEsInVzZXJfbmFtZSI6IjUwMjk1NjI3NjQzMjk0NzMiLCJqdGkiOiJhZDQ1ZDVhMC03YzkzLTRkOTItODQyMy0yZDQyZmVmZDQ5NTIiLCJjbGllbnRfaWQiOiJ0ZXN0Iiwic2NvcGUiOlsiYmFzZSJdfQ.YWBeER_HO_LKFkXMf15I23THh2BicUkozgHdsCo0LTRcs1K6OKRovZJhABH4jw1e_FCHeC490TjQ1jZ_Jh6JFsmyE3gntaYv1HRCOzuCsuh42RwK2hCdLyfGIlcU4dQQyJv_mlfphH34GXTS3Il0L8JzDcbj0zOwNUGK9X-YCjdP0a_ZAK2pOKug0z-SFYoPsvhv66vE9f6duRdPA6x_63ALp_KYMKe3op-eOSxK8E2P5mSuHBehSsvmg5jwwSqWAJaenMKRLd2UWpeXNe4gXf8gIU5NjzBgNUtydvqnDgMRAcsMCWsMrVVCZ6_L5l29ciSVu1qzsZs4GFjUZaFCmQ';
	// let token = `Bearer ${getUserToken().access_token}`
	// 定义请求头
	let header = {
		...params.header
	};
	header["Authorization"] = token;

	ajaxTimes++;
	// 统一的接口的前缀
	const baseUrls = baseUrl;
	return new Promise((reslove, reject) => {
		uni.showLoading({
			title: "加载中"
		});
		uni.request({
			...params,
			header: header,
			url: baseUrls + params.url,
			success: (result) => {
				if (result.statusCode == 200 || result.data.code == 0) {
					reslove(result.data.data);
				}
				else if (result.data.code !== 0) {
					reject(result.data.msg);
				}
			},
			fail: (error) => {
				reject(error);
			},
			complete: () => {
				ajaxTimes--;
				if (ajaxTimes <= 0) {
					// 同时发送出去的请求 都回来了
					uni.hideLoading();
				}
				reslove(0)
			}
		});
	})
}
