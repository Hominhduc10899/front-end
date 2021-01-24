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
        // SUPER IMPORTANT LINE, as this will prevent the form to submit first
        // due to its default behaviour
        e.preventDefault();

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
                alert("Already existed")
            }
            else {
                localStorage.setItem("username", user.email);
                localStorage.setItem("password", user.password);
                window.open('http://localhost:3000', '_self');
            }
            
        })
    }

    return (
        <div style={{verticalAlign: "middle"}}>
            <div className="login-page">
                <form onSubmit={(e) => {submit(e);}}>
                    <h2>Register</h2>
                    {/* <input type="text" name="name" required
                    placeholder="Name" value={user.name} onChange={onChangeInput} /> */}

                    <input type="text" name="email" required
                    placeholder="Email" value={user.email} onChange={onChangeInput} />

                    <input type="password" name="password" required
                    placeholder="Password" value={user.password} onChange={onChangeInput} />

                    <div className="row">
                        <button type="submit">Register</button>
                        <Link to="/login">Login</Link>
                    </div>
                </form>
        </div>
        </div>
        
    )
}

export default Register