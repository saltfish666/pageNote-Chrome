let message = {
  type:'get_token'
}
chrome.runtime.sendMessage(message, function(response){
  localStorage.__pageNote__token = response.token
});

