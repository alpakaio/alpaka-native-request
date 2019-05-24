import axios from 'axios';
import UserAgent from '@alpakaio/alpaka-native-useragent';

const state = {
	axios: null,
};

export default async () => {
	if (!state.axios) {
		const userAgent = await UserAgent.getUserAgentAsync();
		console.log(userAgent);
		state.axios = axios.create({
			headers: {
				'User-Agent': userAgent,
			},
		});
	}
	return state.axios;
};
