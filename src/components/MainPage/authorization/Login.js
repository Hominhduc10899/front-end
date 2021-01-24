import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    // const submit = (e) => {
    //     fetch("http://localhost:9000/login/process", {
    //         method: "post",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             "username": user.email,
    //             "password": user.password
    //         })
    //     })
    //     .then(res => {
    //         console.log(res)

    //         if (res.status === 406) {
    //             alert(res.statusText)
    //             e.preventDefault();
    //         }
    //     })
    //     .catch(err => console.log(err))
    // }

    return (
        <div className="login-page">
            <form method="post" action="http://localhost:9000/login/process">
                <h2>Login</h2>
                <input type="text" name="username" required
                placeholder="Email" value={username} onChange={e => setUsername(e.target.value)} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

                <div className="row">
                    <button type="submit">Login</button>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login