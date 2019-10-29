const url = 'ws://localhost:8080'
const ws = new WebSocket(url)

ws.onopen = () => {
  //ws.send('hey') 
}

ws.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}

ws.onmessage = (e) => {
  console.log(e.data)
  document.getElementById("messages").innerHTML += "<p class='message'>" + e.data + "</p>"
}