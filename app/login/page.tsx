"use client"

import { useState } from "react"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const login = () => {
    console.log(username, password)
    fetch('/api/auth', {method: 'POST', body: JSON.stringify({username, password})})
  }
  return <main>
    <div>
      <input value={username} onChange={(e) => {setUsername(e.target.value)}} />
      <input value={password} type="password" onChange={(e) => { setPassword(e.target.value) }} />
      <button onClick={login} >Login</button>
    </div>
  </main>
}

export default LoginPage
