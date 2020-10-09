

import {
	baseUrl
} from '../../config.js'
// 1 同时发送出去的异步请求的个数
let ajaxTimes = 0;
export const request = (params) => {
	// 定义请求头
	let header = {
		...params.header
	};
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
