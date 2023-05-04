import Brand91 from "../../elemanets/basicEl/Brand91";
import OrangeBtn from "../../elemanets/basicEl/OrangeBtn";
import GetBrands from "./extra/GetBrands";
import {useSelector} from "react-redux";

const BrandsMob = () => {
	const lang = useSelector(state => state.text.currentLang)
	const main = useSelector(state => state.text);
	const langText = main[lang].brands

	return (
		<div className='listBlock listBlockMob1'>
			<div className='text'>
				<Brand91/>
				<p>{langText.text1}</p>
				<OrangeBtn text={langText.text2} fullWidth={true} size={'large'}/>
			</div>
			<div className='data'>
				<GetBrands/>
			</div>
		</div>
	);
};

export default BrandsMob;