let token = window.location.search.split('=')[1]

let message = {
  type: 'set_token',
  token: token
}
chrome.runtime.sendMessage(message, function (response) {
  if (response.state === 200) {
    alert('sucess login to pageNote')
  }
})
