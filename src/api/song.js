import apiUrl from '../apiConfig'
import axios from 'axios'

// have to add authentication pass in later
export const songSearch = (searchTerm) => {
    console.log(apiUrl + '/songs'+ `/${searchTerm}`);
	return axios({
		method: 'GET',
		url: apiUrl + '/songs'+ `/${searchTerm}`
		
	})
}