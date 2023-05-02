import foto1 from './assec/foto1.png'
import foto2 from './assec/foto2.png'
import foto3 from './assec/foto3.png'
import foto4 from './assec/foto4.png'
import foto5 from './assec/foto5.png'
import { Card } from './components/Card/Card'
import './styles/App.css'

const cards = [
	{
		imageURL: foto1,
		subtitle: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
		buttonText: 'Read Full Article',
		size: 'large',
		onButtonClick: () => console.log('text')
	},
	{
		imageURL: foto2,
		subtitle: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
		buttonText: 'Read Full Article',
		size: 'small',
		onButtonClick: () => console.log('text')
	},
	{
		imageURL: foto3,
		subtitle: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
		buttonText: 'Read Full Article',
		size: 'small',
		onButtonClick: () => console.log('text')
	},
	{
		imageURL: foto4,
		subtitle: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
		buttonText: 'Read Full Article',
		size: 'small',
		onButtonClick: () => console.log('text')
	},
	{
		imageURL: foto5,
		subtitle: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
		buttonText: 'Read Full Article',
		size: 'small',
		onButtonClick: () => console.log('text')
	}
];
function App() {
	return (
	<>
		<div className='cont'>
			<div className='cont__col-1'>
				<div className='cont__item-1'>
					<Card {...cards[0]} />
				</div>
			</div>

			<div className='cont__col-2'>
				<div className='cont__col-3'>
					<div className='cont__item-3'>
						<Card {...cards[1]} />
					</div>
				</div>
				<div className='cont__col-3'>
					<div className='cont__item-3'>
						<Card {...cards[2]} />
					</div>
				</div>
				<div className='cont__col-3'>
					<div className='cont__item-3'>
						<Card {...cards[3]} />
					</div>
				</div>
				<div className='cont__col-3'>
					<div className='cont__item-3'>
						<Card {...cards[4]} />
					</div>
				</div>
			</div>
		</div>
	</>
	);
}

export default App;
