import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "../api"

/**
 * Challenge: Code the sad path 🙁
 * 3. Add a `status` state and default it to "idle". When the 
 *    login form begins submitting, set it to "submitting". When
 *    it's done submitting and the data has come back, set it 
 *    to "idle" again
 * 4. Disable the button when the `status` state is "submitting"
 *    (this may require some Googling if you haven't done this
 *    before).
 * 5. Add an `error` state and default it to `null`. When the
 *    form is submitted, reset the errors to `null`. If there's
 *    an error from `loginUser` (add a .catch(err => {...}) in 
 *    the promise chain), set the error to the error that 
 *    comes back.
 * 6. Display the error.message below the `h1` if there's ever
 *    an error in state
 */

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const location = useLocation()
    const [status, setStatus]=useState('idle')
    const [ error, setError ] = useState(null)
    function handleSubmit(e) {
        e.preventDefault()
        setStatus('submitting')
        setError(null)
        loginUser(loginFormData)
            .then(data => { 
                console.log(data)
                setStatus('idle')
            }).catch(err => {
                setError(err.message)
                setStatus('idle')

            })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            {   
                error && <h3 className="login-first">{error}</h3>
            }
            {
                location.state?.message &&
                <h3 className="login-first">{location.state.message}</h3>
            }
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status==='submitting'}>Log in</button>
            </form>
        </div>
    )

}