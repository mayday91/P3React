import SongSearch from './shared/SongSearch'
import { Route, Routes } from 'react-router-dom'
import { Fragment } from 'react'

const Home = (props) => {
	console.log('IN Home @ Home.js');
	const { msgAlert, user } = props


	// not working, maybe I'm using Routes incorrectly

	return (
		
		<Fragment>
			
			<SongSearch user={user}/>

		</Fragment>


	)
}

export default Home