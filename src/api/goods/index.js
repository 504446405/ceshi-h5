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
// 商品下单数据获取
export function getOrdersInfo(data) {
	return request({
		url: '/quxia/api/wx/checkout/info',
		method: 'POST',
		data
	})
}
// 商品下单 总价计算
export function getOrdersCalculateTotal(data) {
	return request({
		url: '/quxia/api/wx/checkout/calculatePrice',
		method: 'POST',
		data
	})
}
// 商品下单 获取支付订单id 支付参数
export function getPayId(data) {
	return request({
		url: '/quxia/api/wx/checkout',
		method: 'POST',
		data
	})
}
// 商品下单 根据支付订单id获取支付参数
export function getPayData(data) {
	return request({
		url: `/quxia/api/wx/orders/pay?id=${data.id}`,
		method: 'POST',
		data
	})
}
