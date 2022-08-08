import apiUrl from '../apiConfig'
import axios from 'axios'

// have to add authentication pass in later
export const songSearch = (searchTerm) => {
	console.log('####################################');
    console.log(apiUrl + '/songs'+ `/${searchTerm}`);
	console.log('#####################################');
	
	return axios({
		method: 'GET',
		url: apiUrl + '/songs'+ `/${searchTerm}`
		
	})
}

