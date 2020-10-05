import {
	request
} from "../request/index.js"

// 已登录的 获取商品列表
export function getGoodsListLogin(data) {
	return request({
		url: '/quxia/api/public/products',
		data
	})
}

// 获取首页广告
export function getHomeAdvertising(data) {
	return request({
		url: '/quxia/api/public/ads',
		data
	})
}

// 获取新人大礼包数据
export function getGiftPacks(data) {
	return request({
		url: '/quxia/api/wx/couponOffers',
		data
	})
}

export function redeemGiftPack(data) {
	return request({
		url: '/quxia/api/wx/couponOffers?deviceId=' + data.deviceId + '&offerId=' + data.offerId,
		method: 'POST'
	})
}
// 领取新人大礼包
export function receiveACoupon(data) {
	return request({
		url: '/quxia/api/wx/coupons/acquire',
		method: 'POST',
		data
	})
}

// 获取设备信息
export function getDeviceInfo(deviceId) {
	return request({
		url: '/quxia/api/public/device/info',
		method: 'GET',
		data: {
			deviceId: deviceId
		}
	})
}

// 获取clientld
export function getClientldApi(data) {
	return request({
		url: '/quxia/api/public/device/clientId',
		method: 'GET',
		data
	})
}

// 查询是否还有 重新开门订单
export function getAnewOpenOrder(data) {
	return request({
		url: `/quxia/api/wx/orders/findForReopen?deviceId=${data}`,
		method: 'GET'
	})
}
// 获取对应商家端appid
export function getMerchantAppid(data) {
	return request({
		url: `/quxia/api/wx/merchant/appid?clientId=${data}`,
		method: 'GET'
	})
}
