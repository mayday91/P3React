
import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { songSearch } from '../../api/song.js'
import { useNavigate } from 'react-router-dom'



const SongSearch = (props) => {


    const [searchTerm,setSearchTerm] = useState('')

// searchTerm is the thing we pass in



        // handle changing state
    const handleInput = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)

    }

    const doSongSearch = (e) => {
        e.preventDefault()

        console.log('searTerm:',searchTerm);

        songSearch(searchTerm).then().catch((error) => {
            // msgAlert({
            //     heading: 'Sign Up Failed with error: ' + error.message,
            //     message: messages.signUpFailure,
            //     variant: 'danger',
            })  
    }



    return (
        <Fragment>             
                <Form onSubmit={(e) => {doSongSearch(e)}} className="d-flex">

                        <Form.Label>Song Search</Form.Label>                
                        <Form.Control
                            onChange = {(e) => {handleInput(e)}}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value = {searchTerm}
                        />
                  <Button variant="outline-success" type="submit" >Search</Button>
                </Form>
        </Fragment>

    )
}



export default SongSearch