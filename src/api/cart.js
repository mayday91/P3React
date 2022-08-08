import apiUrl from '../apiConfig'
import axios from 'axios'


// used for making a car upon sign=up
// passes in user info as POST

// PROBABLY DONT'T NEED
export const signUpMakeCart = (user) => {

	console.log('IN signUpMakeCart @ cart.js');

	console.log('############################################');
    console.log("In signInMakeCart songIdToAdd::",user);
	console.log('############################################');
	
	return axios({
		method: 'POST',
		url: apiUrl + '/carts',
		headers: {
			Authorization: `Token token=${user.token}`,
			// Authorization: Bearer token=${user.token},
			
		}
	})
}

// PASSING values to BACKEND as songID should be 'req.body.songIdToAdd'
// if NO song passed, check MBID for value if not working
// ! check AUTH token values to make sure they align with backend !
export const addSongToCart = (songIdToAdd,user) => {
	console.log('IN addSongToCart @ cart.js');
	console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
    console.log("songIdToAdd::",songIdToAdd);
	console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
	
	return axios({
		method: 'PATCH',
		url: apiUrl + '/carts'+ `/${songIdToAdd}`,
		headers: {
			Authorization: `Token token=${user.token}`,
			
		},
		data: { songIdToAdd : songIdToAdd }
		
	})
}


// send User info to frontend and grab the Cart with matching owner
// should be auth based
export const getMyCart = (user) => {
	let userToPass = user._id
	console.log('IN getMyCart @ cart.js');
	console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
    console.log("'IN getMyCart @ cart.js USER:",userToPass)
	console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
	
	return axios({
		method: 'GET',
		url: apiUrl + '/carts'+ `/${userToPass}`,
		// headers: {
		// 	Authorization: `Token token=${user.token}`,
			
		// }
		
	})
}


// to remove song from Cart in backend. Passes in a song
// that user presses when 'Remove from Cart' is hit
// NEED TO FIGURE OUT HOW TO USE PATCH TO REMOVE IN AXIOS BELOW
export const removeSongFromCartApi = (songIdToRemove,user) => {
	console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
    console.log("songIdToRemove::",songIdToRemove);
	console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
	
	return axios({
		method: 'PATCH',
		url: apiUrl + '/carts'+ `/${songIdToRemove}`,
		headers: {
			Authorization: `Token token=${user.token}`,
			
		},
		data: { songIdToRemove : songIdToRemove }
		
	})
}
