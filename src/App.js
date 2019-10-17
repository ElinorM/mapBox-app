import React ,{ Component } from 'react';
import MapBox from './components/MapBox/MapBox';
import Card from './components/Card/Card';
import CardsData from './components/Card/cards.json'
import './App.css';



class App extends Component {
	constructor() {
    	super();
    	this.state = {
      		data: []
    	}
  	}

  	componentDidMount() {

	  this.setState({data: CardsData[0].data})
  	}

	render() {
		console.log(this.data)
	    return (
	      <div className='rowV'>
	        <MapBox data={this.state.data}/>
	        <Card  onButtonClick={this.onButtonClick} />
	      </div>
	    );
  	}
}

export default App;
