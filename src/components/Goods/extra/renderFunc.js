// отрисовка товаров
export const renderGoods = (goods,rule = false)=>{

	let arr = []
	goods.map((el,i) => {
		if(rule && el.art === '3031800001') {
			return;
		}
		arr.push(
			<div className="goodsBlock" key={i}>
				<img src={el.img} alt={el.name}/>
				<div className='goodsName'>{el.name}</div>
				<div className="goodsArt">
					<span>Артикул: </span>
					<span>{el.art}</span>
				</div>
				<div className="goodsPrice">
					<span>{el.price}</span>
					<span> ₽</span>
				</div>
			</div>
		)
	})
	return arr
}