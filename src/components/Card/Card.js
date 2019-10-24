import React from 'react';
import './Card.css';

const Card = ({name, onButtonClickBack, onButtonClickNext}) => {
	return (
		<div className='mt0 '>
			<div className='center'>
				<div id='text' className='f6 pa2 w-100 center br4 ba b--white-025 shadow-5' >
					{name}
					<div className='row'>
						<button type="button" onClick={onButtonClickBack} >Back</button>
						<button type="button" onClick={onButtonClickNext} >Next</button>
					</div>
				</div>	
			</div>				
		</div>		
	)
}

export default Card;