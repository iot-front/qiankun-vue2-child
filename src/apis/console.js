const restRequest = window.qkRestRequest;
// 登录
export const apiTest1 = () => {
	return restRequest('post', `/resourcemanager/enginekill`, {
		test: 1
	});
}
// 获取公钥
export const apiTest2 = () => {
	return restRequest('get', `/user/publicKey`);
};

