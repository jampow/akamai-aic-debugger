
function configRttCookie(value, url, domain) {
  const config = {
    'url': url,
    'name': 'aic-rtt'
	}

  if(value) {
    config.value = value
    config.domain = domain
    chrome.cookies.set(config)
  } else {
    chrome.cookies.remove(config)
  }
}

function setSelected(rtt) {
	var name = 'active'
	document.querySelectorAll('li').forEach(function(el) { el.classList.remove(name) })
	document.getElementById('rtt' + rtt).classList.add(name)
}

function setCookie(rtt) {
  // TODO: pegar esses dados do localStorage, depois de fazer tela de configuração
  const cookies = [
    {
      url: 'https://dafitistatic-a.akamaihd.net/',
      domain: '.akamaihd.net'
    },
    {
      url: 'https://t-static.dafiti.com.br/',
      domain: '.dafiti.com.br'
    }
  ]

  cookies.forEach(function(ck) {
    configRttCookie(rtt, ck.url, ck.domain)
  })
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

var btn150 = document.getElementById('rtt150')
btn150.addEventListener('click',function(){ setCookie('150') }, false)

var btn500 = document.getElementById('rtt500')
btn500.addEventListener('click',function(){ setCookie('500') }, false)

var btnClear = document.getElementById('clear')
btnClear.addEventListener('click', function(){ setCookie() }, false)
