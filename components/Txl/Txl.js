import React from 'react'
class Txl extends React.Component{
	constructor(){
		super();
		this.state={
			txl:[
			{'name':'新朋友','imgsrc':'../../img/lx1.png'},
			{'name':'群聊','imgsrc':'../../img/l2.png'},
			{'name':'标签','imgsrc':'../../img/l3.png'},
			{'name':'公众号','imgsrc':'../../img/l4.png'},
			{'name':'空行'},
			{'name':'小蛮','imgsrc':'../../img/l6.png'},
			{'name':'小熊','imgsrc':'../../img/l6.png'},
			{'name':'路航车安','imgsrc':'../../img/l7.png'},
			{'name':'阿信','imgsrc':'../../img/l8.png'},
			{'name':'坤','imgsrc':'../../img/l9.png'},
			{'name':'于慧','imgsrc':'../../img/l8.png'},
			{'name':'空行'},
			{'name':'back','imgsrc':'../../img/l11.png'},
			{'name':'郝军','imgsrc':'../../img/l6.png'},
			{'name':'红金','imgsrc':'../../img/l7.png'},
			{'name':'平安','imgsrc':'../../img/l8.png'},
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
export default Txl;