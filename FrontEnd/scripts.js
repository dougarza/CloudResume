fetch('https://xob8yljli1.execute-api.us-east-1.amazonaws.com/alpha').then(function (response) {
    return response.json()
}).then(function (obj) {
    document.getElementById('hitcount').innerHTML = "You are visitor number " + obj.count
}).catch(function (error) {
    console.error('error')
})

