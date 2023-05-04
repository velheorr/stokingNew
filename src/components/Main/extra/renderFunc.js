// отрисовка шагов

export const renderCircles = (steps)=> {
	let arr = []
	steps.map((el, i) =>{
		arr.push(<div key={i}>
			<div className='step'>{el.step}</div>
			<div className='data'>
				<span>{el.text1}</span>
				<p>{el.text2}</p>
			</div>
		</div>)
	})
	return arr
}