'use strict';

const input = document.getElementById('input_url');
const submit = document.getElementById('submit_button');
const result = document.getElementById('result');
const copy_button = document.getElementById('copy_button');

const copyToClipboard = (text) => {
	if (navigator.clipboard) {
		navigator.clipboard.writeText(text).then(() => {
			copy_button.textContent = 'Copied!';
			setTimeout(() => copy_button.textContent = 'Copy', 2000);
		});
	} else {
		// Fallback for older browsers
		const textArea = document.createElement('textarea');
		textArea.value = text;
		document.body.appendChild(textArea);
		textArea.select();
		document.execCommand('copy');
		document.body.removeChild(textArea);
		copy_button.textContent = 'Copied!';
		setTimeout(() => copy_button.textContent = 'Copy', 2000);
	}
};

const shorten = url => fetch('/', {
	body: url,
	method: 'POST'
}).then(res => res.text()).then(val => {
	if ([
		'Invalid URL',
		'Server Error'
	].includes(val))
		throw Error(val);
	return val;
});

const validate = url => {
	try {
		url = new URL(url).href;
		return { ok: true, url };
	} catch (err) {
		return { error: err, ok: false };
	}
};

const dom = {
	clear: () =>
		(input.value = '',
			result.textContent = '',
			result.style.color = '',
			submit.textContent = 'Shorten',
			submit.disabled = true,
			copy_button.style.display = 'none'),
	error: (err) =>
		(result.textContent = err.name + ': ' + err.message,
			result.style.color = 'red',
			submit.textContent = 'Shorten',
			copy_button.style.display = 'none'),
	unerror: () =>
		(result.textContent = '',
			result.style.color = ''),
	result: (str) =>
		(result.textContent = str,
			result.style.color = '',
			copy_button.style.display = 'inline-block')
};

input.addEventListener('input', () =>
	(valid => (submit.disabled = !valid.ok,
		submit.textContent = 'Shorten',
		valid.ok
			? dom.unerror()
			: dom.error(valid.error)))(validate(input.value)));

submit.addEventListener('click', () =>
	shorten(input.value)
		.then(id => dom.result(location.origin + '/' + id))
		.catch(dom.error));

copy_button.addEventListener('click', () => copyToClipboard(result.textContent));
