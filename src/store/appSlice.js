import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import img1 from '../elemanets/img/goods/1.png'
import img2 from '../elemanets/img/goods/2.png'
import img3 from '../elemanets/img/goods/3.png'
import img4 from '../elemanets/img/goods/4.png'
import img5 from '../elemanets/img/goods/5.png'
// хранилище и получение внешних данных

// получение data.json
export const fetchBrandsJSON = createAsyncThunk('catalog/fetchBrandsJSON',async () =>{
		const res = await axios.get('https://api.stoking.ru/v1/brands?selection[filter]=[%7B%22id%22:%22used%22,%22value%22:1%7D]&expand=thumbnail.sizes&fields=id,name,slug,thumbnail.*&per-page=36&page=1&sort=-countDeal');
		return res.data.items;
	}
)

const initialState = {
	allBrands: [], // whole catalog json
	itemLoadState: 'loading', // для использования лоадера, при долгой загрузке данных
	mobile: false, // состояние переключателя страницы на мобильную версию
	goods: [
		{
			img: img1,
			name: 'Насос Pedrollo JCRm 1 B -N',
			art: '46JCN1B0A1',
			price: '14 161',
		},
		{
			img: img2,
			name: 'Реагент для очистки новых систем ',
			art: '3031800001',
			price: '6 970',
		},
		{
			img: img3,
			name: 'Реле давления электр. Vodotok ЭДД-12Р',
			art: 'L4029',
			price: '2 728',
		},
		{
			img: img4,
			name: 'Комплект фитингов Danfoss DN15 ',
			art: '003H6902',
			price: '1 983',
		},
		{
			img: img5,
			name: 'S21A Пластина AiSi 316 0,5 mm TK 1234',
			art: 'S21A ПЛАСТИНА ',
			price: '1 875 ₽',
		},
	],
}


const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		toggleMobile: (state, action) => {state.mobile = action.payload},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchBrandsJSON.pending, (state) =>{
				state.allBrands = [];
				state.itemLoadState = 'loading'
			})
			.addCase(fetchBrandsJSON.fulfilled, (state, action) =>{
				state.allBrands = action.payload;
				state.itemLoadState = 'ready';
			})
			.addCase(fetchBrandsJSON.rejected, (state) =>{
				state.allBrands = [];
				state.itemLoadState = 'rejected';
			})
	}
});

const {actions, reducer} = appSlice;

export default reducer;
export const {
	toggleMobile,
} = actions;