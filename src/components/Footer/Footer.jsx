import {useSelector} from "react-redux";

const Footer = () => {
	const lang = useSelector(state => state.text.currentLang)
	const main = useSelector(state => state.text);
	const langText = main[lang].footer

	return (
		<div className='footer'>
			<ul>
				<li><a href="src/components/Footer/Footer#">{langText.text1}</a></li>
				<li><a href="src/components/Footer/Footer#">{langText.text2}</a></li>
				<li><a href="src/components/Footer/Footer#">{langText.text3}</a></li>
				<li><a href="src/components/Footer/Footer#">{langText.text4}</a></li>
				<li><a href="src/components/Footer/Footer#">{langText.text5}</a></li>
				<li><a href="src/components/Footer/Footer#">{langText.text6}</a></li>
			</ul>
			<div className="company">{langText.company}</div>
		</div>
	);
};

export default Footer;