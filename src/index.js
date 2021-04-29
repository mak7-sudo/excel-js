// import { Excel } from './components/excel/Excel'
// import { Header } from './components/header/Header'
// import { Toolbar } from './components/toolbar/Toolbar'
// import { Formula } from './components/formula/Formula'
// import { Table } from './components/table/Table'
// import { createStore } from './core/createStore'
// import { debounce, storage } from './core/utils'
import { Router } from './core/routes/Router'
import { DashboardPage } from './pages/DashboardPage'
import { ExcelPage } from './pages/ExcelPage'
// import { rootReducer } from './redux/rootReducer'
// import { initialState } from './redux/initialState'
import './scss/index.scss'

new Router('#app', {
	dashboard: DashboardPage,
	excel: ExcelPage
})
