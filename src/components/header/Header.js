import { ExcelComponent } from '../../core/ExcelComponent';

export class Header extends ExcelComponent {
	static className = 'excel__header'

	toHTML() {
		return `
			<input type="text" class="input" value="Новая таблица">

			<div onselectstart="return false">

				<div class="button">
					<span class="material-icons">delete_forever</span>
				</div>

				<div class="button">
					<span class="material-icons">logout</span>
				</div>

			</div>
		`
	}
}
