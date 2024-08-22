const { request, ProxyAgent } = require('undici');
const pa = new ProxyAgent('http://squid:3128');

async function getUUID() {
	try {
		const { statusCode, body } = await request('http://server:3000/uuid', {
			dispatcher: pa  // Use the proxy agent
		});
		const data = await body.json();
		console.log('Status Code:', statusCode);
		console.log('Response:', data);
	} catch (error) {
		console.error('Error:', error);
	}
}
getUUID();
