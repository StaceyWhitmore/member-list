const getFakeMembers() = count => new Promise((rejects, resolves) => {
  const api =  `https://api.randomuser.me/?nat=US&results=${count}`
  const request = new XMLHttpRequest()
  request.open('GET', API)
  request. onload = () => (request.status == 200) ?
    resolves(JSON.parse(request.response).results)
    rejects(Error(request.statusText))
  request.onerror = err => rejects(err)
  request.send()
})

export default getFakeMembers
