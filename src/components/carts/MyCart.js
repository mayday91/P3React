import { useState , useEffect, Fragment } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import { removeSongFromCartApi } from '../../api/cart.js'
import { getMyCart } from '../../api/cart.js'
// import { useEffect } from "react/cjs/react.development";




import Form from 'react-bootstrap/Form';


// shows MyCart from mongo db model in backend.
const MyCart = (props) => {

    const [cartSongsList, setCartSongsList]=useState([])
    const { msgAlert, user } = props

    let song =  "TEMPORARY HOLDER. NOT ACTUAL. SHOULD BE LIKE props.songid"


    const removeFromCartHandler = (e,mbid,user) => {
            e.preventDefault()
            console.log('removeFromCartHandler====>>>',mbid.mbid);
            removeSongFromCartApi(mbid.mbid,user)
    }
    


    useEffect(() => { 
        getMyCart(user)
        .then((res) => {console.log('RES',res);})
        .catch((error) => {console.log(error) })
    }, [])

 
        
   
  

    return(    
        <>
        <Card style={{ width: '30%', margin: 5}} key={song.url}>
        
         {/* should be like :<Card.Header><strong>{ song.name }</strong></Card.Header> */}
           <h2> IN MY CART</h2>
            <Card.Header><strong>{ song }</strong></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div>{ song }</div> 
                        <img src={ song[2]} />
                        <div>{ song }</div>
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