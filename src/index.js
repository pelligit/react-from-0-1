import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class Hello extends Component{
	render(){
		return (
			<div>从零开始搭建react项目。{this.props.msg}。五花马，千金裘，呼儿将出换美酒</div>
		);
	}
}

ReactDOM.render(<Hello msg='Pelli 你好' />, document.getElementById('root'));