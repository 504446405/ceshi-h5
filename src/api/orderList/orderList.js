import {
	request
} from '../request/index.js';

// 获取订单列表
export function getOrderList(data) {
	return request({
		url: '/quxia/api/wx/orders',
		data
	})
}

// 取消订单
export function cancelOrder(data) {
	return request({
		url: '/api/wx/orders/cancel',
		data,
		methods: 'POST'
	})
}

// 订单详情
export function orderInfo(data) {
	return request({
		url: '/quxia/api/wx/orders/detail',
		data,
	})
}