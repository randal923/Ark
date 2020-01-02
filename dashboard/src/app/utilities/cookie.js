import Cookies from 'js-cookie';

export const setCookie = (key, value) => {
	if (process.browser) Cookies.set(key, value, { expires: 1, path: '/' });
};

export const removeCookie = key => {
	if (process.browser) Cookies.remove(key);
};

export const getCookie = key => {
	if (process.browser) return Cookies.get(key);
};

export const getCookies = () => {
	if (process.browser) return Cookies.get();
};

export const getHeaders = () => {
	return {
		headers: {
			authorization: `Ark ${getCookie('user')}`,
		},
	};
};
