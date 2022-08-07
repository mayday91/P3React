import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { songSearch } from '../../api/song.js'
import { addSongToCart } from '../../api/cart.js'
import { useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'


const SongSearch = (props) => {
    console.log('IN SongSearch @ SongSearch.js');

    const { msgAlert, user } = props

    const [searchTerm,setSearchTerm] = useState('')
    const [returnedSongList, setReturnedSongList] = useState([])
    const [char, setChar] = useState('#')
    const [imagePath] = useState('#text')
    


    const handleInput = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)

    }

    const doSongSearch = (e) => {
        e.preventDefault()
        songSearch(searchTerm).then((res) => {setReturnedSongList(res.data.fmData.results.trackmatches.track)}).catch((error) => {
        })  
    }

    // gets one song by ADD button and sends it to backend to add to cart
     const addToCartHandler = (e,mbid,user) => {
        e.preventDefault()
        console.log('addToCartHandler====>>>',mbid.mbid);
        addSongToCart(mbid.mbid,user)
     }

    // console.log('returnedSongList;@@@@@@@@',returnedSongList)
    // const imageString = "aSong.image[2]." + String.fromCharCode(35) + "text"

    // grabs user Search input and sends it to backend
    // then hits LASTFM api and returns the list
    // then it generates a CARD for each
    const songsToDisplay = returnedSongList.map(aSong => (
        <Card style={{ width: '30%', margin: 5}} key={aSong.url}>
            <Card.Header><strong>{ aSong.name }</strong></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div>{ aSong.artist }</div> 
                        <img src={ aSong.image[2]} />
                        <div>{ aSong.mbid }</div>
                        <Form onSubmit={(e) => {addToCartHandler(e,aSong,user)}} className="d-flex">
                            <Button variant="primary" type = "submit" >
                                Add to Cart        
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
         </Card>
    ))

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
                {songsToDisplay}
        </Fragment>
    )
}



export default SongSearch