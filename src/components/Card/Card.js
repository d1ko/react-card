import './Card.css'

export const Card = props => {
	const { imageURL, subtitle, title, buttonText, onButtonClick, size } = props
	const cardStyle = {
		height: size === 'large' ? '700px' : '330px',
	}
	return (
		<div className='container'>
			<div className='card' style={cardStyle}>
				<img className='card__img'src={imageURL} alt='img'/>
				<div className='card__style'>
					<h6 className='card__subtitle'>{subtitle}</h6>
					<h3 className='card__title'>{title}</h3>
					<button className='card__button' onClick={onButtonClick}>
						{buttonText}
					</button>
				</div>
			</div>
		</div>
	)
}
