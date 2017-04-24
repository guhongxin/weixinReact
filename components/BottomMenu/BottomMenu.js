import React  from 'react';
import MenuBtn  from '../MenuBtn/MenuBtn.js';
import Nav  from '../Nav/Nav.js';
import Chatinfor  from '../Chatinfor/Chatinfor.js';
import Txl  from '../Txl/Txl.js';
import Fx  from '../Fx/Fx.js';
import Myset  from '../Myset/Myset.js';


import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute
} from 'react-router-dom'

class BottomMenu extends React.Component{
	constructor(){
		super();
		this.state={}
	}
	render(){
		var menu=this.state.menu;
		console.log(menu);
		return (
			<Router>
			<div>
				<Nav />
				<div className='contentbox'>
					<Route exact path="/" component={Chatinfor} />
          <Route path="/TxL" component={Txl}/>
          <Route path="/Fx" component={Fx}/>
          <Route path="/Myset" component={Myset}/>
          <Route path="/Home" component={Home}/>
				</div>
				<MenuBtn />
			</div>
			</Router>
		)
	}
}
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
export default BottomMenu;