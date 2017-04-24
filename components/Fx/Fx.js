import React from 'react'
class Fx extends React.Component{
	constructor(){
		super();
		this.state={
			txl:[
			{'name':'空行'},
			{'name':'朋友圈','imgsrc':'../../img/21.png'},
			{'name':'空行'},
			{'name':'扫一扫','imgsrc':'../../img/22.png'},
			{'name':'摇一摇','imgsrc':'../../img/23.png'},
			{'name':'空行'},
			{'name':'附近的人','imgsrc':'../../img/24.png'},
			{'name':'漂流瓶','imgsrc':'../../img/25.png'},
			{'name':'空行'},
			{'name':'购物','imgsrc':'../../img/26.png'},
			{'name':'游戏','imgsrc':'../../img/27.png'},
			]
		}
	}
	render(){
		var txl=this.state.txl;
		return (
			<div className='txl'>
				<div className='Chatinfor'>
					<ul>
						{
							txl.map(function(currentValue,index){
								if(currentValue.name!='空行'){
									return(
										<li key={index}>
											<img src={currentValue.imgsrc} style={{verticalAlign:'middle'}}/>
											<div style={{paddingTop:'0px'}}>
												<p className='Chatinfor-title' style={{lineHeight:'50px'}}>{currentValue.name}</p>
											</div>
										</li>
									)	
								}
								else{
									return <div className='jiange' key={index}></div>
								}
								
							})
							
						}
						
					</ul>
				</div>
			</div>
		)
	}
}
export default Fx;