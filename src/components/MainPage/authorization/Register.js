import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const submit = (e) => {
        fetch("http://localhost:9000/register", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": user.email,
                "password": user.password
            })
        })
        .then(res => {
            console.log(res);

            if (res.status === 406) {
                alert(res.statusText)
                e.preventDefault();
            }
            else {
                window.open('http://localhost:3000', '_self');
            }
        })
    }

    return (
        <div className="login-page">
            <form onSubmit={(e) => {submit(e);}} target={"_self"}>
                <h2>Register</h2>
                <input type="text" name="name" required
                placeholder="Name" value={user.name} onChange={onChangeInput} />

                <input type="text" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Register</button>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register