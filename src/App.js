import React ,{ Component } from 'react';
import MapBox from './components/MapBox/MapBox';
import Card from './components/Card/Card';
import CardsData from './cards.json'
import './App.css';



class App extends Component {
	constructor() {
    	super();
    	this.state = {
      		card: [],
      		index:0
    	}
  	}

  	componentDidMount() {
	  	this.setState({card: CardsData[this.state.index]})
  	}


  	changeCard = (index) => {
    	this.setState({card: CardsData[index]})
  	}

  	onButtonClickNext = () => {
  		let index = this.state.index;
  		if (index===(CardsData.length -1)) {
  			index = 0;
  		} else {
  			index++;
  		}
    	this.setState({index: index});
    	this.changeCard(index)
  	}

  	onButtonClickBack = () => {
  		let index = this.state.index;
  		if (index===0) {
  			index = CardsData.length -1;
  		} else {
  			index--;
  		}
    	this.setState({index: index});
    	this.changeCard(index)
  	}

  

	render() {
		console.log(this.data)
	    return (
	      <div className='rowV'>
	        <MapBox card={this.state.card}/>
	        <Card  name ={this.state.card.name} onButtonClickNext={this.onButtonClickNext} onButtonClickBack={this.onButtonClickBack} />
	      </div>
	    );
  	}
}

export default App;
