// отрисовка брендов
export const renderBrands = (allBrands)=>{
	const arr = []
	allBrands.map(el =>{
		if (el.name === 'ЗиП ПТО') return;
		arr.push(<div key={el.id} className='brandBlock'><img src={el.thumbnail.path} alt={el.name}/></div>)
	})
	return arr
}