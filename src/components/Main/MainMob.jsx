import StokingImg from "../../elemanets/basicEl/StokingImg";
import OrangeBtn from "../../elemanets/basicEl/OrangeBtn";
import {useSelector} from "react-redux";
import {renderCircles} from "./extra/renderFunc";

const MainMob = () => {
	const lang = useSelector(state => state.text.currentLang)
	const main = useSelector(state => state.text);
	const langText = main[lang].main

	const readyCircles = renderCircles(main[lang].main.steps)

	return (
		<div className='mainMob'>
			<div className='title'>{langText.title1}</div>
			<div>{langText.title2}</div>
			<div>{langText.title3}</div>
			<StokingImg/>
			<OrangeBtn text={langText.btn1} sx={{marginTop: 5}} fullWidth={true} size={'large'}/>
			<div className='title titleMob'>{langText.title4}</div>
			<div className='circles'>
				{readyCircles}
			</div>
		</div>
	);
};

export default MainMob;