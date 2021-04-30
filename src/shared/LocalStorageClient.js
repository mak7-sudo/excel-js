import { storage } from '../core/utils'

function storageName(param) {
	return 'excel:' + param
}

export class LocalStorageClient {
	constructor(name) {
		this.name = storageName(name)
	}

	save(state) {
		storage(this.name, state)
		return Promise.resolve()
	}

	get() {
		return new Promise(resolve => {
			const state = storage(this.name)
			const fakeTimer = Math.floor(Math.random() * 1000)

			setTimeout(() => {
				resolve(state)
			}, fakeTimer)
		})
	}
}
