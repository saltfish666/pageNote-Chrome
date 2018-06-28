let token = window.location.search.split("=")[1]

if(token){
  let message = {
    type:'set_token',
    token:token
  }
  chrome.runtime.sendMessage(message, function(response){
    alert("成功登录page-Note")
  })
}
