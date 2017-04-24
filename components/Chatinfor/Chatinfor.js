import React from 'react'
class Chatinfor extends React.Component{
	constructor(){
		super();
		this.state={
			chattin:[
			{'name':'nn','ts':'在吗？','imgsrc':'../../img/1.png'},
			{'name':'zy','ts':'打大飒飒','imgsrc':'../../img/2.png'},
			{'name':'zy额外','ts':'大扫除','imgsrc':'../../img/3.png'},
			{'name':'nn','ts':'在吗？','imgsrc':'../../img/1.png'},
			{'name':'zy','ts':'打大飒飒','imgsrc':'../../img/2.png'},
			{'name':'zy额外','ts':'大扫除','imgsrc':'../../img/3.png'},
			{'name':'nn','ts':'在吗？','imgsrc':'../../img/1.png'},
			{'name':'zy','ts':'打大飒飒','imgsrc':'../../img/2.png'},
			{'name':'zy额外','ts':'大扫除','imgsrc':'../../img/3.png'},
			{'name':'zy额外','ts':'大扫除','imgsrc':'../../img/3.png'},
			{'name':'nn','ts':'在吗？','imgsrc':'../../img/1.png'},
			{'name':'zy','ts':'打大飒飒','imgsrc':'../../img/2.png'},
			{'name':'zy额外','ts':'大扫除','imgsrc':'../../img/3.png'},
			{'name':'zy额外','ts':'大扫除','imgsrc':'../../img/3.png'},
			{'name':'nn','ts':'在吗？','imgsrc':'../../img/1.png'},
			{'name':'zy','ts':'打大飒飒','imgsrc':'../../img/2.png'},
			{'name':'zy额外','ts':'大扫除','imgsrc':'../../img/3.png'},
			]
		}
	}
	render(){
		var litianxin=this.state.chattin;
		return (
			<div className='Chatinfor'>
				<ul>
					{
					litianxin.map(function(currentValue,index){
						return (
							<li key={index}>
								<img src={currentValue.imgsrc} />
								<div>
									<p className='Chatinfor-title'>{currentValue.name}</p>
									<p className='Chatinfor-ts'>{currentValue.ts}</p>
								</div>
							</li>
						)
					})
					}
				</ul>
			</div>
		)
	}
}
export default Chatinfor;
