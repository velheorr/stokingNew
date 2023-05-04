import OrangeBtn from "../../elemanets/basicEl/OrangeBtn";
import Brand91 from "../../elemanets/basicEl/Brand91";
import GetBrands from "./extra/GetBrands";
import {useSelector} from "react-redux";


const Brands = () => {
	const lang = useSelector(state => state.text.currentLang)
	const main = useSelector(state => state.text);
	const langText = main[lang].brands

	return (
		<div className='listBlock'>
			<div className='text'>
				<Brand91/>
				<p>{langText.text1}</p>
				<OrangeBtn text={langText.text2}/>
			</div>
			<div className='data'>
				<div className='brandBlur brandBlur1'></div>
				<GetBrands/>
				<div className='brandBlur brandBlur2'></div>
			</div>
		</div>
	);
};

export default Brands;