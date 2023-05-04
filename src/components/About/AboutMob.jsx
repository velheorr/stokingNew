import {useSelector} from "react-redux";

const AboutMob = () => {
	const lang = useSelector(state => state.text.currentLang)
	const main = useSelector(state => state.text);
	const langText = main[lang].about

	return (
		<div className='about aboutMob'>
			<div className='text'>
				<p><b>Stoking</b> — {langText.text1}</p>
				<p>{langText.text2}</p>
				<p>{langText.text3}</p>
				<p>{langText.text4}</p>
			</div>
		</div>
	);
};

export default AboutMob;