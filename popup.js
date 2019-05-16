
function setRttCookie(value, url, domain) {
	chrome.cookies.set({
		'url': url,
		'name': 'aic-rtt',
		'domain': domain,
		'value': value
	})
}

function setAkamaiCookie(value) {
	setRttCookie(value, 'https://dafitistatic-a.akamaihd.net/', '.akamaihd.net')
}

function setDftStaticCookie(value) {
	setRttCookie(value, 'https://t-static.dafiti.com.br/', '.dafiti.com.br')
}

function setSelected(rtt) {
	var name = 'active'
	document.querySelectorAll('li').forEach(function(el) { el.classList.remove(name) })
	document.getElementById('rtt' + rtt).classList.add(name)
}

function setCookie(rtt) {
	setDftStaticCookie(rtt)
	setAkamaiCookie(rtt)
	setSelected(rtt)
}

chrome.cookies.get({
	'name': 'aic-rtt',
	'url': 'https://t-static.dafiti.com.br/'
},function(cookie) {
	if (!cookie || !cookie.name) return
	setSelected(cookie.value)
})

var btn10 = document.getElementById('rtt10')
btn10.addEventListener('click',function(){ setCookie('10') }, false)

var btn100 = document.getElementById('rtt100')
btn100.addEventListener('click',function(){ setCookie('100') }, false)

var btn400 = document.getElementById('rtt400')
btn400.addEventListener('click',function(){ setCookie('400') }, false)

