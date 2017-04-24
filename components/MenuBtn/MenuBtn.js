import React  from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link, 
} from 'react-router-dom'


class MenuBtn extends React.Component{
	constructor(match){
		super();
		this.state={menu:[
				{'title':'微信','zjIcon':'../../img/wx2.png','url':'/'},
				{'title':'通信录','zjIcon':'../../img/txl1.png','url':'/Txl'},
				{'title':'发现','zjIcon':'../../img/fx1.png','url':'/Fx'},
				{'title':'我','zjIcon':'../../img/w1.png','url':'/Myset'},
			],
			defaultmenu:[
				{'title':'微信','zjIcon':'../../img/wx1.png','url':'/'},
				{'title':'通信录','zjIcon':'../../img/txl1.png','url':'/Txl'},
				{'title':'发现','zjIcon':'../../img/fx1.png','url':'/Fx'},
				{'title':'我','zjIcon':'../../img/w1.png','url':'/Myset'},
			],
			pNub:0,
		};
		this.alink=this.alink.bind(this);
	}
	alink(e){
		var _href=e.target.parentNode.getAttribute('href');
		var _data=[];
		var that=this;
		function qh(index,arr,icon){
			for(var i=0;i<arr.length;i++){
				var obj={};
				if(i!=index){
					obj.title=that.state.defaultmenu[i].title;
					obj.zjIcon=that.state.defaultmenu[i].zjIcon;
					obj.url=that.state.defaultmenu[i].url;
				}else{
					obj.title=that.state.defaultmenu[i].title;
					obj.zjIcon=icon;
					obj.url=that.state.defaultmenu[i].url;
				}
				_data.push(obj);
			}
			return _data;
		}
		switch(_href){
			case '/':this.setState({menu:qh(0,this.state.menu,'../../img/wx2.png'),pNub:0});break;
			case '/Txl':this.setState({menu:qh(1,this.state.menu,'../../img/txl2.png'),pNub:1});break;
			case '/Fx':this.setState({menu:qh(2,this.state.menu,'../../img/fx2.png'),pNub:2});break;
			case '/Myset':this.setState({menu:qh(3,this.state.menu,'../../img/w2.png'),pNub:3});break;
		}
	}
	render(){
		var _menu=this.state.menu;
		
		var that=this;
		return (
			<div className='bottombox'>
			{
				_menu.map(function(currentValue,index){
					var activep=that.state.pNub==index?{'color':'#32FA3F'}:null;
					console.log(activep);
					return(
						<Link  to={currentValue.url} className='menuBtn' onClick={that.alink} key={index}>
							<img src={currentValue.zjIcon}/>
							<p style={activep}>{currentValue.title}</p>
						</Link>
					)
				})
			}
			</div>
		)
	}
}
export default MenuBtn;