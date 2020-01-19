export function getBreedsNames (state) {
	const breedsNames = []
	for (let key in state.breeds) {
		if (state.breeds[key].length > 0) {
			breedsNames.push({
				name: key,
				subBreeds: state.breeds[key]
			})
		} else {
			breedsNames.push({
				name: key
			})
		}
	}

	return breedsNames
	//return state.breeds
}

export function getSpecialBreedName (state) {
	return function (payload) {
		return state.breeds[payload]
	}
}

export function getBreedImg (state) {
	return function (payload) {
		return state.imgs[payload][0]
	}
}