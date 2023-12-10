export const validateLoginWithRegx = (value: string): string => {
	return /^(?![0-9]+$)[a-zA-Z0-9_-]{3,20}$/.test(value)
		? ''
		: 'от 3 до 20 символов, латиница, может содержать цифры!';
};

export const validatePasswordWithRegx = (value: string): string => {
	return /^(?=.*[A-Z])(?=.*\d).{6,20}$/.test(value)
		? ''
		: 'от 6 до 20 символов, обязательно хотя бы одна заглавная буква и цифра!';
};

export const validateEmailWithRegx = (value: string): string => {
	return /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(value)
		? ''
		: 'может содержать цифры и спецсимволы вроде _ и -, обязательно должна быть @!';
};

export const validateNameWithRegx = (value: string): string => {
	return /^[а-яА-Яa-zA-Z][а-яa-z-]*$/.test(value)
		? ''
		: 'может содержать латиницу или кириллицу!';
};

export const validatePhoneWithRegx = (value: string): string => {
	return /^\+?\d{11,12}$/.test(value) ? '' : 'от 11 до 12 символов!';
};

export const validateSearchWithRegx = (value: string): string => {
	return /^[a-zA-Z][a-z-]*$/.test(value) ? '' : 'может содержать латиницу!';
};
