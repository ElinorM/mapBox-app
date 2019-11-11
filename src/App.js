import React ,{ Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MapBox from './components/MapBox/MapBox';
import Card from './components/Card/Card';
import CardsData from './cards.json';
import './App.css';



class App extends Component {
	constructor() {
    	super();
    	this.state = {
      		card: [],
      		index:0,
      		center:[34.78093646063007,32.08063627522023],
      		coordinates:CardsData[0].data.features[0].geometry.coordinates,
      		zoom: [13],
      		geometryType:CardsData[0].data.features[0].geometry.type
    	}
  	}

  	componentDidMount() {
	  	this.setState({card: CardsData[this.state.index]})
  	}


  	changeCard = (index) => {
    	this.setState({card: CardsData[index]})
  	}

  	changeCenter = (index) => {
  		let geometry = CardsData[index].data.features[0].geometry;
  		if (geometry.type === "Polygon") {
  			this.setState({center: geometry.coordinates[0][0]});
  		} else if (geometry.type === "LineString") {
  			this.setState({center: geometry.coordinates[0]});
  		} else if (geometry.type === "Point") {
  			this.setState({center: geometry.coordinates})
  		}
  		this.setState({geometryType: geometry.type})
  	}

  	onButtonClickNext = () => {
  		let index = this.state.index;
  		if (index===(CardsData.length -1)) {
  			index = 0;
  		} else {
  			index++;
  		}
    	this.setState({index: index});
    	this.changeCard(index);
    	this.changeCenter(index);
    	this.setState({zoom: [15]})

  	}

  	onButtonClickBack = () => {
  		let index = this.state.index;
  		if (index===0) {
  			index = CardsData.length -1;
  		} else {
  			index--;
  		}
    	this.setState({index: index});
    	this.changeCard(index);
    	this.changeCenter(index);
    	this.setState({zoom: [15]});
  	}

  

	render() {
		console.log(this.data)
	    return (
	      <div className='rowV'>
	        <MapBox 
	        	card={this.state.card} 
	        	center={this.state.center} 
	        	zoom={this.state.zoom} 
	        	coordinates={this.state.coordinates} 
	        	geometryType={this.state.geometryType}
	        />
	        <ReactCSSTransitionGroup
	          components={null}
	          transitionName="slide"
	          transitionEnterTimeout={1000}
	          transitionLeaveTimeout={1000}
	        >
		        <Card  
		        	card ={this.state.card}
		        	key={this.state.index}
		        	index={this.state.index}
		        	cardsDataLength ={CardsData.length}
		        	onButtonClickNext={this.onButtonClickNext} 
		        	onButtonClickBack={this.onButtonClickBack} 
		        />
		    </ReactCSSTransitionGroup>
	      </div>
	    );
  	}
}

export default App;
