let token = localStorage.__token

chrome.runtime.onMessage.addListener(async function(message, sender, sendResponse){
  if(message.type === 'get_token'){
    if(token){
      sendResponse({
        state:200,
        token:token
      })
    }else{
      sendResponse({
        state:404,
        token:undefined
      })
    }

  }
  if(message.type === 'set_token'){
    token = message.token
    localStorage.__token = token
    sendResponse({
      state:200,
      body:'success set: ' + token
    })
  }

});


