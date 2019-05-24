export default (method, request) => async (url, data, config = {}) => {
	const req = {
		method,
		url,
		data,
		...config,
	};
	return request(req);
};
