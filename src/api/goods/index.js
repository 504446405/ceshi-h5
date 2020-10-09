import {
	request
} from "../request/index.js"
// 获取商品详情
export function getGoodsDetails(url, data) {
	return request({
		url,
		data
	})
}
// 商品下单 总价计算
export function getOrdersCalculateTotal(data) {
	return request({
		url: '/quxia/api/public/checkout/calculatePrice',
		method: 'POST',
		data
	})
}
// 商品下单 获取下单信息
export function getPlaceAnOrderData(data) {
	return request({
		url: '/quxia/api/public/checkout/info',
		method: 'POST',
		data
	})
}

// 商品下单 获取下单信息
export function getPlaceAnOrderId(data) {
	return request({
		url: '/quxia/api/public/checkout',
		method: 'POST',
		data
	})
}
