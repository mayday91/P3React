import { useState, useEffect, Fragment } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import { removeSongFromCartApi } from '../../api/cart.js'


import Form from 'react-bootstrap/Form';


// shows MyCart from mongo db model in backend.
const MyCart = (props) => {

    let song = "TEMPORARY HOLDER. NOT ACTUAL. SHOULD BE LIKE props.songid"

    const { msgAlert, user } = props


    const removeFromCartHandler = (e,mbid,user) => {
            e.preventDefault()
            console.log('removeFromCartHandler====>>>',mbid.mbid);
            removeSongFromCartApi(mbid.mbid,user)
         }
    

    return(
        <>
        <Card style={{ width: '30%', margin: 5}} key={song.url}>
            <Card.Header><strong>{ song.name }</strong></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div>{ song.artist }</div> 
                        <img src={ song.image[2]} />
                        <div>{ song.mbid }</div>
                        <Form onSubmit={(e) => {removeFromCartHandler(e,song,user)}} className="d-flex">
                            <Button variant="primary" type = "submit" >
                                Remove from Cart        
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
         </Card>
        </>

    )

}

export default MyCart