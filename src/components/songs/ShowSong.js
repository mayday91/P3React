

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// NOT USED AT THE MOMENT




import { useState, useEffect, Fragment } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
// import LoadingScreen from '../shared/LoadingScreen'
// import { getOnePet, updatePet, removePet } from '../../api/pets'
// import messages from '../shared/AutoDismissAlert/messages'

const ShowSong = (props) => {
    const [song, setSong] = usestate('')

    // const { id } = useParams()
    const navigate = useNavigate()

    // prob need msgAlert here in future
    const { user } = props




return (

    <>
    <Container className="fluid">
        <Card style={lb}>
            <Card.Header>{ pet.fullTitle }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <div><small>Age: { pet.age }</small></div>
                    <div><small>Type: { pet.type }</small></div>
                    <div><small>
                        Adoptable: { pet.adoptable ? 'yes' : 'no'}
                    </small></div>
                </Card.Text>
            </Card.Body>
            
        </Card>
    </Container>
    

    {/* ?????????
    <Container>
        {toyCards}  
    </Container> */}

</>


)


}




