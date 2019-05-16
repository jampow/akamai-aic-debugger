const url = 'https://dafitistatic-a.akamaihd.net/'

function setCookie(value, url){
	chrome.cookies.set({
		'url': url,
		'name': 'aic-rtt',
		'domain': '.akamaihd.net',
		'value': value
	},function (cookie){
		setSelected(value)
	});
}

function setSelected(rtt) {
	document.querySelectorAll('li').forEach(function(el) { el.classList.remove('active') })
	document.getElementById('rtt' + rtt).classList.add('active')
}

chrome.cookies.get({
	'name': 'aic-rtt',
	'url': url
},function(cookie) {
	if (!cookie || !cookie.name) return
	console.log('cookie', cookie)
	setSelected(cookie.value)
})

var btn10 = document.getElementById('rtt10')
btn10.addEventListener('click',function(){ setCookie('10', url) }, false)

var btn100 = document.getElementById('rtt100')
btn100.addEventListener('click',function(){ setCookie('100', url) }, false)

var btn400 = document.getElementById('rtt400')
btn400.addEventListener('click',function(){ setCookie('400', url) }, false)

