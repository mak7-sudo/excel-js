import { DomListener } from './DomListener'

export class ExcelComponent extends DomListener {
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || ''
		this.emitter = options.emitter
		this.subscribe = options.subscribe || []
		this.store = options.store
		this.unsubscribers = []

		this.prepare()
	}

	// Настраиваем наш компонент под init
	prepare() {}

	// Ворзвращаем шаблон компонента
	toHTML() {
		return ''
	}

	// Уведомляем слушателей о событии event
	$emit(event, ...args) {
		this.emitter.emit(event, ...args)
	}

	// Подписываемся на событие event
	$on(event, fn) {
		const unsub = this.emitter.subscribe(event, fn)
		this.unsubscribers.push(unsub)
	}

	$dispatch(action) {
		this.store.dispatch(action)
	}

	// Здесь получаем только изменения по тем полям, на которые подписались
	storeChanged() {}

	isWatching(key) {
		return this.subscribe.includes(key)
	}

	// Инициализируем компонент и добавляем DOM слушателей
	init() {
		this.initDOMListeners()
	}

	// Удаляем компонент
	// Чистим слушателей
	destroy() {
		this.removeDOMListeners()
		this.unsubscribers.forEach(unsub => unsub())
	}
}
