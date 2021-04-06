import { ExcelComponent } from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
	static className = 'excel__formula'

	constructor($root) {
		super($root, {
			name: 'Formula',
			listeners: ['input', 'click']
		})
	}

	toHTML() {
		return `
			<div class="info">fx</div>
	
			<div class="input" contentEditable="true" spellCheck="false"></div>
		`
	}

	onInput() {
		console.log('Formula: onInput', event)
	}

	onClick() {
		console.log('Formula: onClick', event)
	}
}
