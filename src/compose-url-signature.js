export default (method, request) => async (url, config = {}) => {
	const req = {
		method,
		url,
		...config,
	};
	return request(req);
};
