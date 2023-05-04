import phone from '../../elemanets/img/phone.png'
import {useSelector} from "react-redux";

const About = () => {
	const lang = useSelector(state => state.text.currentLang)
	const main = useSelector(state => state.text);
	const langText = main[lang].about

	return (
		<div className='about'>
			<div className='text'>
				<p><b>Stoking</b> — {langText.text1}</p>
				<p></p>
				<p>{langText.text2}</p>
				<p>{langText.text3}</p>
			</div>
			<img src={phone} alt=""/>
		</div>
	);
};

export default About;