import { useState , useEffect, Fragment } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import { removeSongFromCartApi } from '../../api/cart.js'
import { getMyCart } from '../../api/cart.js'

import Form from 'react-bootstrap/Form';


// shows MyCart from mongo db model in backend.
const MyCart = (props) => {

    const [cartSongsList, setCartSongsList]=useState([])
    const { msgAlert, user } = props
    const [cartItemsToShow, setCartItemsToShow] = useState([])
    const [songListFromMongo, setSongListFromMongo]= useState({})

    const removeFromCartHandler = (e,mbid,user) => {
            e.preventDefault()
            console.log('removeFromCartHandler====>>>',mbid.mbid);
            removeSongFromCartApi(mbid.mbid,user)
    }
    
    let showCards = null
    let testCard = null

    // useEffect(() => { 
    //     getMyCart(user)
    //     .then((res) => {
    //         // cartItemsToDisplay = res.data.cart[0].songs
    //         // let oneThing = res.data.cart[0].songs[9].songName // working+
    //         console.log('^^^^^^^^^^^^IN .THEN RES^^^^^^^^^^^^^');
    //         // setSongListFromMongo(res.data.cart[0])

    //         setSongListFromMongo(songListFromMongo => ({...songListFromMongo, res }))

            
    //         // console.log('RES++++++++++++++',res.data.cart[0].songs);})
    //     // .catch((error) => {console.log(error) })
    //     }, [])
    // })

    




    const conversion = () => {
        // let converted = JSON.parse(oneThing)
        console.log('IN CONVERSION');
        setSongListFromMongo("teststate")

        console.log('songListFromMongo ::***********',songListFromMongo);
            
        return 

    }

    conversion()

        const finalCartItems = songListFromMongo.map(cartElement => (
            <Card style={{ width: '30%', margin: 5}} key={cartElement}>
                <Card.Header><strong>{ cartElement }</strong></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <div>{ cartElement}</div> 
                            {/* <img src={ cartElement.image[3]['#text'] } /> */}
                            {/* <img src={ cartElement.image[3]['#text'] } /> */}
                            <div>{ cartElement.mbid }</div>
                            <Form onSubmit={(e) => {removeFromCartHandler(e,cartElement,user)}} className="d-flex">
                                <Button variant="primary" type = "submit" >
                                    Remove From Cart        
                                </Button>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
        ))      
  

    return(    
  
        <>
        <Card style={{ width: '30%', margin: 5}} key={showCards}>        
         {/* should be like :<Card.Header><strong>{ song.name }</strong></Card.Header> */}
           <h2> IN MY CART</h2>
            <Card.Header><strong>{ }</strong></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div> {}</div> 
                        <img src={showCards} />
                        <div>{  }</div>
                        <Form onSubmit={(e) => {removeFromCartHandler(e,user)}} className="d-flex">
                            <Button variant="primary" type = "submit" >
                                Remove from Cart Not working       
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>

                {finalCartItems}
         </Card>



        </>

    )

}

export default MyCart





