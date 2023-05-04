import {createSlice} from "@reduxjs/toolkit";
// хранилище текстовой информации + варианты разных языков

const initialState = {
	currentLang: 'ru',
	ru: {
		header: {
			btn1: 'Каталог',
			search: 'Поиск по товарам',
			menu1: 'Чат',
			menu2: 'Вход',
			menu3: 'Сравнение',
			menu4: 'Закладки',
			menu5: 'Корзина',
		},
		main: {
			title1: 'Stoking — маркетплейс промышленного оборудования',
			title2: 'Владеете складом промышленного оборудования или производите его?',
			title3: 'Начни продавать уже сейчас.',
			btn1: 'Стать продавцом на Stoking',
			title4: 'Этапы работы',
			steps: [
				{
					step: 'Шаг 1',
					text1: 'Свяжитесь с нами',
					text2: 'Оставьте заявку в форме обратной связи. В кротчайшие сроки наши специалисты свяжутся с вами.'
				},
				{
					step: 'Шаг 2',
					text1: 'Предоставьте остатки',
					text2: 'Отправьте нам данные о наличии товара и цены для продажи, в любой удобной для вас форме. Техническую интеграцию больших объемов товаров берем на себя.'
				},
				{
					step: 'Шаг 3',
					text1: 'Обновляйте остатки',
					text2: 'Поддерживайте остатки и стоимости в актуальном виде и все продажи будут вашими. Мы об этом позаботимся!'
				},
			]
		},
		about: {
			text1: 'маркетплейс инженерно-промышленного оборудования.',
			text2: 'Рынок промышленного оборудования изменяется. Появляются новые, качественные бренды, формируются больше склады, меняется политика компаний, ускоряются процессы логистики оборудования.',
			text3: 'Стокинг это более 50 инженеров, создавших сервис-проводник в сегменте промышленного оборудования.',
			text4: 'Мы хотим знать что вы производите, продаете и донести это миру.'
		},
		subheader: {
			text1: 'Сотрудничество Stoking',
			text2: 'Выберите язык',
			opt1: 'Русский',
			opt2: 'Английсий',
			opt3: 'Турецкий',
		},
		brands: {
			text1: 'Официальный дилер мировых брендов-производителей.',
			text2: 'Стать продавцом на Stoking.',
		},
		goods: {
			text1: ' На нашем сайте, в наличии с актуальными ценами.',
		},
		footer: {
			text1: 'Сотрудничество',
			text2: 'Доставка и возврат',
			text3: 'Оплата',
			text4: 'Контакты',
			text5: 'Публичная оферта',
			text6: 'Политика конфиденциальности',
			company: 'ООО «‎Хитинвест» by Spaceport 2022‎',
			textMob1: 'Главная',
			textMob2: 'Каталог',
			textMob3: 'Корзина',
			textMob4: 'Избранное',
			textMob5: 'Профиль',
		}
	},
	en: {
		header: {
			btn1: 'Catalog',
			search: 'Search for goods',
			menu1: 'Chat',
			menu2: 'Login',
			menu3: 'Compare',
			menu4: 'Bookmarks',
			menu5: 'Cart',
		},
		main: {
			title1: 'Stoking — marketplace of industrial equipment',
			title2: 'Do you own the industrial equipment warehouse or produce it?',
			title3: 'Start selling now.',
			btn1: 'Become a seller on Stoking',
			title4: 'Stages of work',
			steps: [
				{
					step: 'Step 1',
					text1: 'Contact us',
					text2: 'Leave a note in the form of feedback. Our experts will contact you.'
				},
				{
					step: 'Step 2',
					text1: 'Provide the remains',
					text2: 'Send us information about goods and prices for sale, in any form convenient for you. We will take the technical integration.'
				},
				{
					step: 'Step 3',
					text1: 'Update the remains',
					text2: 'Support the remains and costs in actual form and all sales will be yours. We will take care of this!'
				},
			]
		},
		about: {
			text1: 'marketplace of industrial equipment.',
			text2: 'The industrial equipment market is changing. New, high -quality brands appear, more warehouses are formed, companies policy are changing, and the processes of equipment logistics are accelerated.',
			text3: 'Stoking are more than 50 engineers who created a service guide in the industrial equipment segment.',
			text4: 'We want to know what you produce, sell and tell about it to the world.'
		},
		subheader: {
			text1: 'Cooperation with Stoking',
			text2: 'Select language',
			opt1: 'Russian',
			opt2: 'English',
			opt3: 'Turkish',
		},
		brands: {
			text1: 'Official dealer of world brands-manufacturers.',
			text2: 'Become a seller on Stoking.',
		},
		goods: {
			text1: ' Available on our site with current prices',
		},
		footer: {
			text1: 'Cooperation',
			text2: 'Delivery and return',
			text3: 'Payment',
			text4: 'Contacts',
			text5: 'Public offer',
			text6: 'Privacy Policy',
			company: 'LLC "Hitinvest" by Spaceport 2022',
			textMob1: 'Main',
			textMob2: 'Catalog',
			textMob3: 'Cart',
			textMob4: 'Favorites',
			textMob5: 'Profile',
		}
	},
	tu: {
		header: {
			btn1: 'Catalog',
			search: 'Search for goods',
			menu1: 'Chat',
			menu2: 'Login',
			menu3: 'Compare',
			menu4: 'Bookmarks',
			menu5: 'Cart',
		},
		main: {
			title1: 'Stoking — marketplace of industrial equipment',
			title2: 'Do you own the industrial equipment warehouse or produce it?',
			title3: 'Start selling now.',
			btn1: 'Become a seller on Stoking',
			title4: 'Stages of work',
			steps: [
				{
					step: 'Step 1',
					text1: 'Contact us',
					text2: 'Leave a note in the form of feedback. Our experts will contact you.'
				},
				{
					step: 'Step 2',
					text1: 'Provide the remains',
					text2: 'Send us information about goods and prices for sale, in any form convenient for you. We will take the technical integration.'
				},
				{
					step: 'Step 3',
					text1: 'Update the remains',
					text2: 'Support the remains and costs in actual form and all sales will be yours. We will take care of this!'
				},
			]
		},
		about: {
			text1: 'marketplace of industrial equipment.',
			text2: 'The industrial equipment market is changing. New, high -quality brands appear, more warehouses are formed, companies policy are changing, and the processes of equipment logistics are accelerated.',
			text3: 'Stoking are more than 50 engineers who created a service guide in the industrial equipment segment.',
			text4: 'We want to know what you produce, sell and tell about it to the world.'
		},
		subheader: {
			text1: 'Cooperation with Stoking',
			text2: 'Select language',
			opt1: 'Russian',
			opt2: 'English',
			opt3: 'Turkish',
		},
		brands: {
			text1: 'Official dealer of world brands-manufacturers.',
			text2: 'Become a seller on Stoking.',
		},
		goods: {
			text1: ' Available on our site with current prices',
		},
		footer: {
			text1: 'Cooperation',
			text2: 'Delivery and return',
			text3: 'Payment',
			text4: 'Contacts',
			text5: 'Public offer',
			text6: 'Privacy Policy',
			company: 'LLC "Hitinvest" by Spaceport 2022',
			textMob1: 'Main',
			textMob2: 'Catalog',
			textMob3: 'Cart',
			textMob4: 'Favorites',
			textMob5: 'Profile',
		}
	}
}


const textSlice = createSlice({
	name: 'text',
	initialState,
	reducers: {
		updateLang: (state, action) => {state.currentLang = action.payload},
	},
});

const {actions, reducer} = textSlice;

export default reducer;
export const {
	updateLang,
} = actions;