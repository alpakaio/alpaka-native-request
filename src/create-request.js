import createAxios from './axios';
import composeRequest from './compose-request';
import composeRequestUrlSignature from './compose-url-signature';
import composeRequestUrlDataSignature from './compose-url-data-signature';

export default async (tenant = 'fail', token = null) => {
	const axios = await createAxios();
	const request = composeRequest(axios, tenant, token);
	request.get = composeRequestUrlSignature('get', request);
	request['delete'] = composeRequestUrlSignature('delete', request);
	request.head = composeRequestUrlSignature('head', request);
	request.options = composeRequestUrlSignature('options', request);
	request.post = composeRequestUrlDataSignature('post', request);
	request.put = composeRequestUrlDataSignature('put', request);
	request.patch = composeRequestUrlDataSignature('patch', request);
	return request;
};
