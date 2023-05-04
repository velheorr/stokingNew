import {useSelector} from "react-redux";
import {useResize} from "./hook/useResize";
import {useLang} from "./hook/useLang";

import Header from "./components/Header/Header";
import SubHeader from "./components/SubHeader";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Brands from "./components/Brands/Brands";
import Goods from "./components/Goods/Goods";
import Footer from "./components/Footer/Footer";
import HeaderMob from "./components/Header/HeaderMob";
import MainMob from "./components/Main/MainMob";
import AboutMob from "./components/About/AboutMob";
import BrandsMob from "./components/Brands/BrandsMob";
import GoodsMob from "./components/Goods/GoodsMob";
import FooterMob from "./components/Footer/FooterMob";


const App = ()=> {
	const mobile = useSelector(state => state.app.mobile);
	useResize() // переключение на мобильную версию при размере экрана менее 500px
	useLang() // получение языка браузера и запись в localstorage, так же проверка есть ли значение в localstorage


	return (
		<>
			{
				!mobile
				?
					<>
						<Header/>
						<SubHeader/>
						<Main/>
						<About/>
						<Brands/>
						<Goods/>
						<Footer/>
					</>
				:
					<>
						<HeaderMob/>
						<SubHeader/>
						<MainMob/>
						<AboutMob/>
						<BrandsMob/>
						<GoodsMob/>
						<FooterMob/>
					</>
			}
		</>
	);
}

export default App;
