import Goods3465 from "../../elemanets/basicEl/goods3465";
import {useSelector} from "react-redux";
import {renderGoods} from "./extra/renderFunc";

const GoodsMob = () => {
	const goods = useSelector(state => state.app.goods);
	const readyGoods = renderGoods(goods, true)

	const lang = useSelector(state => state.text.currentLang)
	const main = useSelector(state => state.text);
	const langText = main[lang].goods

	return (
		<div className='listBlock listBlockMob2'>
			<div className='text'>
				<Goods3465/>
				<p>{langText.text1}</p>
			</div>
			<div className='goods'>
				{readyGoods}
			</div>
		</div>
	);
};

export default GoodsMob;