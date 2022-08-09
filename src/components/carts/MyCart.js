import { useState , useEffect, Fragment } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import { removeSongFromCartApi } from '../../api/cart.js'
import { getMyCart } from '../../api/cart.js'
import Stripe from './stripe.js'
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4} from 'uuid'
import { render } from 'sass'


// shows MyCart from mongo db model in backend.
const MyCart = (props) => {
    // const [cartSongsList, setCartSongsList]=useState([])
    const { msgAlert, user } = props
    // const [cartItemsToShow, setCartItemsToShow] = useState([])
    const [songListFromMongo, setSongListFromMongo]= useState(null)
    const [cartAmountTotal, setCartAmountTotal] = useState()

    const removeFromCartHandler = (e,mbid,user) => {
            e.preventDefault()
            console.log('removeFromCartHandler====>>>',mbid.mbid);
            removeSongFromCartApi(mbid.mbid,user)
    }


    useEffect(() => { 
        getMyCart(user)
            .then((res) => {
                // cartItemsToDisplay = res.data.cart[0].songs
                // let oneThing = res.data.cart[0].songs[9].songName // working+
                console.log('^^^^^^^^^^^^IN .THEN RES^^^^^^^^^^^^^');
                console.log('res51',res);

                setSongListFromMongo(res.data) //.cart[0].songs[9].songName
                // console.log('SongListFromMongo=LENGTH',songListFromMongo.cart[0].songs)

                
                // setSongListFromMongo(songListFromMongo => ({...songListFromMongo, res }))

                
                // console.log('RES++++++++++++++',res.data.cart[0].songs);})
            // .catch((error) => {console.log(error) })
                return res
            })
            .then((res) => {
                setCartAmountTotal(res.data.cart[0].songs.length)
            })
            
            
            .catch((err) => {console.log(err);})
    },[])

    console.log('cartAmountTotal%%%%%%%%%%%%%%%%%%%%%%%%%%%',cartAmountTotal);
        
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
            <div className="row " style={{ backgroundColor: "#0353a4" ,paddingLeft: "8%"}}>
                <Stripe total={cartAmountTotal}  />
                {
                    songListFromMongo.cart[0].songs.map((cartElement) => {  
                        return (                              
                            <Card className="col-md-3" style={{ width: '18rem', margin: 5, backgroundColor: "#d9dcd6"}} key={uuidv4()}>
                                {/* <Card.Header>{ cartElement.songName }</Card.Header> */}
                                <h2 style={{ textAlign: 'center'}} >{ cartElement.songName }</h2>
                                <Card.Body  >
                                        <div>{ cartElement.songArtist }</div>
                                        <img style= {{width: '15rem'}} src={ cartElement.songImages} />
                                        <div>$1.00</div>
                                 </Card.Body>
                            </Card> 
                    
                        )
                    })   
            
                }   

                    
                </div>
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