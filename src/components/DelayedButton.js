import React from 'react';

export default class DelayedButton extends React.Component {

	delay = (event) => {
		event.persist()
		this.props.onDelayedClick(event)
	}

	render() {
		return (
			<button onClick={this.delay}>Delayed Button</button> 
		)
	}
}