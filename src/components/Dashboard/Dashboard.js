import { useEffect, useState } from 'react'
import axios from 'axios'
import ActiveAdmin from '../ActiveAdmin/ActiveAdmin'
import { useSelector } from 'react-redux'
import MaterialTable from 'material-table'
import XLSX from 'xlsx'
import { forwardRef } from 'react'
import AddBox from '@material-ui/icons/AddBox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'

const tableIcons = {
	Add: forwardRef((props, ref) => (
		<AddBox {...props} ref={ref} style={{ fontSize: '2rem' }} />
	)),
	Check: forwardRef((props, ref) => (
		<Check {...props} ref={ref} style={{ fontSize: '2.5rem' }} />
	)),
	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Delete: forwardRef((props, ref) => (
		<DeleteOutline {...props} ref={ref} style={{ fontSize: '2rem' }} />
	)),
	DetailPanel: forwardRef((props, ref) => (
		<ChevronRight {...props} ref={ref} style={{ fontSize: '2.5rem' }} />
	)),
	Edit: forwardRef((props, ref) => (
		<Edit {...props} ref={ref} style={{ fontSize: '2rem' }} />
	)),
	Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
	Filter: forwardRef((props, ref) => (
		<FilterList {...props} ref={ref} style={{ fontSize: '2rem' }} />
	)),
	FirstPage: forwardRef((props, ref) => (
		<FirstPage {...props} ref={ref} style={{ fontSize: '2.5rem' }} />
	)),
	LastPage: forwardRef((props, ref) => (
		<LastPage {...props} ref={ref} style={{ fontSize: '2.5rem' }} />
	)),
	NextPage: forwardRef((props, ref) => (
		<ChevronRight {...props} ref={ref} style={{ fontSize: '2.5rem' }} />
	)),
	PreviousPage: forwardRef((props, ref) => (
		<ChevronLeft {...props} ref={ref} style={{ fontSize: '2.5rem' }} />
	)),
	ResetSearch: forwardRef((props, ref) => (
		<Clear {...props} ref={ref} style={{ fontSize: '2rem' }} />
	)),
	Search: forwardRef((props, ref) => (
		<Search {...props} ref={ref} style={{ fontSize: '2rem' }} />
	)),
	SortArrow: forwardRef((props, ref) => (
		<ArrowDownward {...props} ref={ref} style={{ fontSize: '2.5rem' }} />
	)),
	ThirdStateCheck: forwardRef((props, ref) => (
		<Remove {...props} ref={ref} style={{ fontSize: '2rem' }} />
	)),
	ViewColumn: forwardRef((props, ref) => (
		<ViewColumn {...props} ref={ref} style={{ fontSize: '2rem' }} />
	)),
}

const Dashboard = () => {
	const { showActiveAdmin } = useSelector(state => state.quiz)

	//Pagination
	const [userData, setUserData] = useState([])

	useEffect(() => {
		try {
			const fetchData = async () => {
				const contacts = []
				const data = await axios.get(
					'https://contact-form-2d4a6-default-rtdb.firebaseio.com/contact.json'
				)
				Object.keys(data.data).forEach((key, i) => {
					contacts.unshift(data.data[key][0])
					// console.log(data.data[key][0])
				})
				setUserData(contacts)
			}
			fetchData()
		} catch (e) {
			console.log(e)
		}
	}, [])

	const columns = [
		{ title: 'Имя', field: 'Имя' },
		{ title: 'Фамилия', field: 'Фамилия' },
		{ title: 'Отчество', field: 'Отчество' },
		{ title: 'Дата регистрации', field: 'Дата регистрации' },
		{ title: 'Дата рождения', field: 'Дата рождения' },
		{ title: 'Социальный статус', field: 'Социальный статус' },
		{ title: 'Email', field: 'Email' },
		{ title: 'Телефон', field: 'Телефон' },
		{ title: 'Город', field: 'Город' },
		{ title: 'Регион', field: 'Регион' },
		{ title: 'Награды и достижение', field: 'Награды и достижение' },
		{
			title: 'Предполагаемая форма оплаты за обучение в ВУЗе',
			field: 'Предполагаемая форма оплаты за обучение в ВУЗе',
		},
		{ title: 'Вид учебного заведения', field: 'Вид учебного заведения' },
		{ title: 'Учебное заведение', field: 'Учебное заведение' },
		{ title: 'Образовательная программа', field: 'Образовательная программа' },
		{ title: 'Форма обучения', field: 'Форма обучения' },
		{ title: 'Кафедра-консультант', field: 'Кафедра-консультант' },
		{ title: 'Язык обучения', field: 'Язык обучения' },
		{ title: 'Вопрос', field: 'Вопрос' },
	]

	const newDate = userData.map(user => {
		return {
			Имя: user.Имя,
			Фамилия: user.Фамилия,
			Отчество: user.Отчество,
			'Дата регистрации': user['Дата регистрации'],
			'Дата рождения': user['Дата рождения'],
			'Социальный статус': user['Социальный статус'],
			Email: user['Email'],
			Телефон: user['Телефон'],
			Город: user['Город'],
			Регион: user['Регион'],
			'Награды и достижение': user['Награды и достижение'],
			'Предполагаемая форма оплаты за обучение в ВУЗе':
				user['Предполагаемая форма оплаты за обучение в ВУЗе'],
			'Вид учебного заведения': user['Вид учебного заведения'],
			'Учебное заведение': user['Учебное заведение'],
			'Образовательная программа': user['Образовательная программа'],
			'Форма обучения': user['Форма обучения'],
			'Кафедра-консультант': user['Кафедра-консультант'],
			'Язык обучения': user['Язык обучения'],
			Вопрос: user['Вопрос'],
		}
	})

	const downloadExcel = () => {
		const newData = newDate.map(row => {
			delete row.tableData
			return row
		})
		const workSheet = XLSX.utils.json_to_sheet(newData)
		const workBook = XLSX.utils.book_new()
		XLSX.utils.book_append_sheet(workBook, workSheet, 'students')
		//Buffer
		// let buf = XLSX.write(workBook, {bookType: 'xlsx', type: 'buffer'})
		//Binary string
		XLSX.write(workBook, { bookType: 'xlsx', type: 'binary' })
		//Download
		XLSX.writeFile(workBook, 'StudentsData.xlsx')
	}

	return (
		<>
			{!showActiveAdmin ? (
				<ActiveAdmin />
			) : (
				<div
					style={{
						marginTop: '10rem',
						overflowX: 'auto',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<MaterialTable
						style={{
							boxShadow:
								'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
							maxWidth: '90vw',
							overflow: 'auto',
						}}
						icons={tableIcons}
						title={
							<p
								style={{
									fontSize: '2.5rem',
									fontWeight: 'var(--fw-medium)',
								}}
							>
								Абитуриенты
							</p>
						}
						columns={columns}
						data={userData}
						options={{
							headerStyle: {
								fontSize: '1.4rem',
								fontFamily: 'var(--family)',
								backgroundColor: '#01579b',
								color: '#FFF',
							},
							searchFieldStyle: {
								fontSize: 'var(--fs-sm)',
								fontFamily: 'var(--family)',
							},
							rowStyle: {
								fontSize: '1.4rem',
								fontFamily: 'var(--family)',
							},
						}}
						actions={[
							{
								icon: () => (
									<SaveAlt style={{ fontSize: '3rem', color: '#01579b' }} />
								),
								tooltip: 'Экспортировать в Excel',
								onClick: () => downloadExcel(),
								isFreeAction: true,
							},
						]}
					/>
				</div>
			)}
		</>
	)
}

export default Dashboard
