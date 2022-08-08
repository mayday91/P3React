import { useState , useEffect, Fragment } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import { removeSongFromCartApi } from '../../api/cart.js'
import { getMyCart } from '../../api/cart.js'
// import StripeCheckout from 'react-stripe-checkout'
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4} from 'uuid'
import { render } from 'sass'


// shows MyCart from mongo db model in backend.
const MyCart = (props) => {

    // const [cartSongsList, setCartSongsList]=useState([])
    const { msgAlert, user } = props
    // const [cartItemsToShow, setCartItemsToShow] = useState([])
    const [songListFromMongo, setSongListFromMongo]= useState(null)

    const removeFromCartHandler = (e,mbid,user) => {
            e.preventDefault()
            console.log('removeFromCartHandler====>>>',mbid.mbid);
            removeSongFromCartApi(mbid.mbid,user)
    }
    
    // let showCards = null
    // let testCard = null

    // GOES INSIDE RENDER
//     <StripeCheckout
//     stripeKey = "pk_test_51LUZ1VBiP5RJVuISbJ5woJ2ONE6CzCuzmX2lhy72gawpunhS9CXEsUop9WvyJ92IEsxv52y2NKfmS9rcl1ogpEZ900A0HIoyMl"
//     token = {handleToken}
//     amount = {1 * 100}
//     label = "ButtonLabel"
//     shippingAddress
//     // can add image
//     // use 42424242 four twos for CC number always


// />





    useEffect(() => { 
        getMyCart(user)
            .then((res) => {
                // cartItemsToDisplay = res.data.cart[0].songs
                // let oneThing = res.data.cart[0].songs[9].songName // working+
                console.log('^^^^^^^^^^^^IN .THEN RES^^^^^^^^^^^^^');
                console.log('res51',res);
                setSongListFromMongo(res.data) //.cart[0].songs[9].songName

                // setSongListFromMongo(songListFromMongo => ({...songListFromMongo, res }))

                
                // console.log('RES++++++++++++++',res.data.cart[0].songs);})
            // .catch((error) => {console.log(error) })
            
            }).catch((err) => {console.log(err);})
    },[])
        
// getMyCart(user)

// .then((res) => {
    
//     console.log('res$~$~$from MongoGet',res.data.cart[0].songs)
//     setSongListFromMongo(res.data.cart[0].songs)
//                         /// could be (res.data.cart[0].songs)

// }).catch((error)=> {console.log(error);})


function handleToken(token,addresses){console.log(token,addresses)}  //
    

console.log('!!!!songListFromMongo!!!!',songListFromMongo)


 

    if(!songListFromMongo){
        return(<div>Please Wait</div>)
    } else {
        return(           
            <>        
                {
                    songListFromMongo.cart[0].songs.map((cartElement) => {  
                        return (                              
                            <Card style={{ width: '30%', margin: 5}} key={uuidv4()}>
                                <Card.Header>{ cartElement.songName }</Card.Header>
                                <Card.Body>
                                        <div>{ cartElement.songArtist }</div>
                                        <img src={ cartElement.songImages} />
                                 </Card.Body>
                            </Card> 
                    
                        )
                    })   
            
                }   
                    

            </>

        )
    }
}

export default MyCart





// code for remove button in render
{/* <Form onSubmit={(e) => {removeFromCartHandler(e,cartElement,user)}} className="d-flex">
<Button variant="primary" type = "submit" >
Remove From Cart        
</Button>
</Form> */}