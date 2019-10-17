import React from 'react';
import './Card.css';

const Card = ({onButtonClick}) => {
	return (
		<div className='mt0 '>
			<div className='center'>
				<div id='text' className='f6 pa2 w-100 center br4 ba b--white-025 shadow-5' onClick={onButtonClick}>
					Here is a text controlling what shows on the map
					<div className='row'>
						<button type="button" >Back</button>
						<button type="button" >Next</button>
					</div>
				</div>
				
			</div>				
		</div>		
	)
}

export default Card;