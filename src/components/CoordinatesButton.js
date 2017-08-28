import React from 'react'

export default class CoordinatesButton extends React.Component {

	get = (event) => {
		this.props.onReceiveCoordinates([event.clientX, event.clientY])
	}

	render(){
		return(
		<div>
			<button onClick={this.get}/>
		</div>
	)}
};

