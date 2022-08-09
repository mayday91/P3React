import './SongSearch.js'
import Row from 'react-bootstrap/Row'
import React, { useState, Fragment } from 'react'
// import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import { songSearch } from '../../api/song.js'
import { addSongToCart } from '../../api/cart.js'
import { useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'


const lb ={backgroundColor: " #005792", width: "14rem"}



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
        songSearch(searchTerm).then((res) => {setReturnedSongList(res.data.fmData.results.albummatches.album)}).catch((error) => {
        })  
    }

    // gets one song by ADD button and sends it to backend to add to cart
     const addToCartHandler = (e,wholeSong,user) => {
        e.preventDefault()
        // console.log('addToCartHandler====>>>',mbid.mbid);
        addSongToCart(wholeSong,user)
     }

    // console.log('returnedSongList;@@@@@@@@',returnedSongList)
    // const imageString = "aSong.image[2]." + String.fromCharCode(35) + "text"
    // const songImage = `${aSong.image[2].text}`

    // grabs user Search input and sends it to backend
    // then hits LASTFM api and returns the list
    // then it generates a CARD for each

    console.log("###SONGSEARCH###",returnedSongList)

    // const cleanSongList = returnedSongList.forEach(song => {
    //     console.log('SONG~~~~~',song.image[2])

    // })
    // console.log('cleanSongList',cleanSongList)

    const songsToDisplay = returnedSongList.map(aSong => (

        <Card className="col-md-3" style={{ width: '18rem', margin: 5, backgroundColor: "#d9dcd6"}} key={aSong.url}>
            {/* <Card.Header style={lb}><strong>{ aSong.name }</strong></Card.Header> */}
                <h2 style={{ textAlign: 'center'}} >{ aSong.name }</h2>
                <Card.Body style={{ backgroundColor: "#d9dcd6"}} >
                    <Card.Text>
                        <div>{ aSong.artist }</div> 
                        <img style={{width: '15rem'}} src={ aSong.image[3]['#text'] } />
                        {/* <div>{ aSong.mbid }</div> */}
                        <Form onSubmit={(e) => {addToCartHandler(e,aSong,user)}} className="d-flex">
                            <Button className="blue" variant="primary" type = "submit" style={{marginTop: '6px'}} >
                                Add to Cart        
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
         </Card>

    ))


    return (
   
        <Fragment >
            <div className="blue">            
                <Form onSubmit={(e) => {doSongSearch(e)}} className="d-flex" style={{ backgroundColor: "#0353a4"}}>

                        <Form.Label className="blue"></Form.Label>                
                        <Form.Control
                            onChange = {(e) => {handleInput(e)}}
                            type="search"
                            placeholder="Search Song"
                            className="me-2"
                            aria-label="Search"
                            value = {searchTerm}
                            style={{ width: '30%', 
                                    marginLeft: "25%", 
                                    marginRight: "auto"
                                    , marginTop: "2%"}}                            
                        />
                  <Button  className="blue" variant="success" type="submit" style={{marginTop : "2%"}} >Search</Button>
                </Form>
                <div className="row" style={{ backgroundColor: "#0353a4", paddingLeft: "4%"}} >
                {songsToDisplay}
                </div>
            </div>
        </Fragment>

    )
}



export default SongSearch

{/* <Row xs={1} md={2} className="g-3"> */}
