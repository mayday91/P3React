// import React, { Component } from 'react'

// NEEDS to create a Cart on sign-up still

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import {signUpMakeCart} from '../../api/cart'

import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = (props) => {
    console.log('IN SignUP @ SignUp.js');
	// constructor(props) {
	// 	super(props)

	// 	this.state = {
	// 		email: '',
	// 		password: '',
	// 		passwordConfirmation: '',
	// 	}
	// }    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const navigate = useNavigate()

	const onSignUp = (event) => {
        console.log('IN onSignUp @ SignUp.js');
		event.preventDefault()

		const { msgAlert, setUser } = props

        const credentials = {email, password, passwordConfirmation}

		signUp(credentials)
			.then(() => signIn(credentials))
			.then((res) => setUser(res.data.user))
			.then(() =>
				msgAlert({
					heading: 'Sign Up Success',
					message: messages.signUpSuccess,
					variant: 'success',
				})
			)
            .then(() => navigate('/'))
            .catch((error) => {
                setEmail('')
                setPassword('')
                setPasswordConfirmation('')
				msgAlert({
					heading: 'Sign Up Failed with error: ' + error.message,
					message: messages.signUpFailure,
					variant: 'danger',
				})
			})
	}


    return (
        <div className='row' style={{ backgroundColor: "#0353a4"}}>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                <h3 style={{ marginLeft: "16px"}}>Sign Up</h3>
                <Form onSubmit={onSignUp}>
                    <Form.Group controlId='email'>
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control
                            required
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={e => setEmail(e.target.value)}
                            style={{ margin: "16px"}}
                        />
                    </Form.Group>
                    <Form.Group controlId='password'>
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Password'
                            onChange={e => setPassword(e.target.value)}
                            style={{ margin: "16px"}}
                        />
                    </Form.Group>
                    <Form.Group controlId='passwordConfirmation'>
                        {/* <Form.Label>Password Confirmation</Form.Label> */}
                        <Form.Control
                            required
                            name='passwordConfirmation'
                            value={passwordConfirmation}
                            type='password'
                            placeholder='Confirm Password'
                            onChange={e => setPasswordConfirmation(e.target.value)}
                            style={{ margin: "16px"}}
                        />
                    </Form.Group>
                    <Button variant='success' type='submit' style={{ marginLeft: "16px"}}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )

}

export default SignUp