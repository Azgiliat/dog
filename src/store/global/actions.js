import Axios from 'axios';

export async function loadBreeds ({ commit }) {
	await Axios({
		url: 'https://dog.ceo/api/breeds/list/all',
		method: 'get'
	})
		.then(response => {
			return response.data.message
		})
		.then(result => {
			commit('setBreeds', result)
		})
}

export async function loadImgs ({ commit, getters }) {
	const loads = []
	getters.getBreedsNames.forEach(breed => {
	loads.push(Axios({
		url: `https://dog.ceo/api/breed/${breed.name}/images`,
		method: 'get'
	})
	.then(response => response.data.message)
	.then(result => {
		commit('setImgs', {
			result,
			breed: breed.name
		})
	}))
	})
	return Promise.all(loads)
} 