import OrangeBtn from "../../elemanets/basicEl/OrangeBtn";
import StokingImg from "../../elemanets/basicEl/StokingImg";
import {useSelector} from "react-redux";
import {renderCircles} from "./extra/renderFunc";

const Main = () => {
	const lang = useSelector(state => state.text.currentLang)
	const main = useSelector(state => state.text);
	const langText = main[lang].main


	const readyCircles = renderCircles(main[lang].main.steps)

	return (
		<div className='main'>
			<div className='title'>{langText.title1}</div>
			<div>{langText.title2}</div>
			<div>{langText.title3}</div>
			<OrangeBtn text={langText.btn1} sx={{marginTop: 5}}/>
			<StokingImg/>
			<div className='title'>{langText.title4}</div>

			<div className='circles'>
				{readyCircles}
				<div className='dash lDash'></div>
				<div className='dash rDash'></div>
			</div>

		</div>
	);
};

export default Main;