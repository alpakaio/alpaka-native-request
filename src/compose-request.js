export default (axios, tenant, token = null) => async (config) => {
	const req = {
		responseType: 'json',
		responseEncoding: 'utf8',
		baseURL: `https://${tenant}.alpaka.io/api/v3/`,
		method: 'get',
		...config,
	};
	if (token) {
		req.headers = req.headers || {};
		req.headers.Authorization = `Bearer ${token}`;
	}
	return axios.request(req);
};
