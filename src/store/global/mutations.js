export function setBreeds (state, payload) {
	Object.assign(state.breeds, payload)
}

export function setImgs (state, payload) {
	state.imgs[payload.breed] = payload.result
}