import React from 'react'
class Myset extends React.Component{
	constructor(){
		super();
		this.state={
			txl:[
			{'name':'空行'},
			{'name':'wangdanfeng','imgsrc':'../../img/31.png','height':'80px'},
			{'name':'空行'},
			{'name':'相册','imgsrc':'../../img/32.png'},
			{'name':'收藏','imgsrc':'../../img/33.png'},
			{'name':'空行'},
			{'name':'钱包','imgsrc':'../../img/34.png'},
			{'name':'卡包','imgsrc':'../../img/35.png'},
			{'name':'空行'},
			{'name':'表情','imgsrc':'../../img/36.png'},
			{'name':'空行'},
			{'name':'设置','imgsrc':'../../img/37.png'},
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
								var _height=index==1?currentValue.height:null;
								var _lineHeight=index==1?'80px':'50px';
								if(currentValue.name!='空行'){
									return(
										<li key={index} style={{height:_height}}>
											<img src={currentValue.imgsrc} style={{verticalAlign:'middle'}}/>
											<div style={{paddingTop:'0px'}}>
												<p className='Chatinfor-title' style={{lineHeight:_lineHeight}}>{currentValue.name}</p>
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
export default Myset;