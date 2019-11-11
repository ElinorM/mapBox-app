import React from 'react';
import Arrow  from './Arrow.svg';
import './Card.css';

const Card = ({card, index, cardsDataLength, onButtonClickBack, onButtonClickNext}) => {
	return (
		<div id='container' className='container' >
			<div id='cardInfo'>
				<div id='cardNumber'>
					{index+1} / {cardsDataLength}
				</div>
				<div id='title' >
					{card.title}
				</div>
				<div id='text' className='text'>
					{card.text}
				</div>
				<div id='imgPlaceHolder'>
					<img src={card.img} alt={card.name} height="230px"/>
				</div>
			</div>
			<div  className='buttons-container ma3'>
				<div className='row'>
					<div className="button grow" onClick={onButtonClickBack}><img className="arrowBack" alt= '' src ={Arrow}/></div>
					<div className="button grow" onClick={onButtonClickNext}><img className="arrowNext" alt= '' src ={Arrow}/></div>
				</div>
			</div>
		</div>
	)
}

export default Card;