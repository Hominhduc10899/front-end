import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const submit = (e) => {
        e.preventDefault();

        fetch("http://localhost:9000/login", {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        .then(res => {
            console.log(res)
            if (res.status === 404) {
                alert("Login detail not found");
                e.preventDefault();
            }
            else {
                alert("Success!");
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                window.open('http://localhost:3000', '_self');
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="login-page">
            <form onSubmit={e => submit(e)}>
            
            {/* <form method="post" action="http://localhost:9000/login/process" target="_self"> */}
                <h2>Login</h2>
                {
                (window.location.search !== "?error=") ? null : (
                    <h2 style={{color: "red"}}>Invalid</h2>
                ) 
            }
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