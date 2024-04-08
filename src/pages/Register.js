import React from 'react'

export default function Register() {

  let sendData = () => {
    
    let data = {
        username: "Virat Kohli",
        email: "virat@gmail.com",
        password: "Virat@123"
    }
    fetch(`http://localhost:1337/api/auth/local/register`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => { res.json()})
      .then((data) => {
        console.log(data);
       })
      .catch(() => { });

  }

  return (
    <form class="w-25 offset-4">
      <h1>Register Form</h1>
      <div className="mb-3">
        <label htmlFor="usename" className="form-label">Username</label>
        <input type="text" name="usename" className="form-control" id="usename" aria-describedby="usrename" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" name="password" className="form-control" id="password" />
      </div>
      <button type="button" onClick={sendData} className="btn btn-primary">Register</button>
    </form>
  )
}
