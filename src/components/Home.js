import SongSearch from './shared/SongSearch'
import { Route, Routes } from 'react-router-dom'
import { Fragment } from 'react'

const Home = (props) => {
	// const { msgAlert, user } = props


	// not working, maybe I'm using Routes incorrectly

	return (
		
		<Fragment>
			<h1>HOMEPAGE YO</h1> 
			<Routes>
				<Route path='/songs' element ={<SongSearch />}></Route>
			</Routes>
		</Fragment>


	)
}

export default Home