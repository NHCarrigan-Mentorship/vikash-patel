// GET Method
fetch('https://dummyjson.com/users')
.then((res) => res.json())
.then((data) => console.log(data))
 
// POST Method
fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: 'Jane Doe',
      email: 'janedoe@example.com',
      age: 30
  }) 
})
.then(res => res.json())
.then(data => console.log(data))