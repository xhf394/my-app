import React from 'react';
import './Square.css';

class Square extends React.Component {
    
    constructor(props){
    	super(props);
        //设置hover悬停值初始值为false
        this.state = {
        	hover: false,
        }
        //绑定鼠标进入和离开事件
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this)
    }
    
    /*鼠标进入事件*/
    onMouseEnter(){
        //鼠标进入对应方块，设置hover值为真
		this.setState({
			hover: true
		})
	}
    
    /*鼠标离开事件*/
	onMouseLeave(){
        //鼠标离开对应方块，设置hover值为假
        this.setState({
        	hover: false,
        	})
	}

    render(){
        //获取对应地坪方块所有信息 包含id & title & 图片层级 & 图片路径
        const constructionSquare = this.props.constructionSquare;

        //console.log(constructionSquare);
        //获取对应地坪方块层级信息
        const fileLevelArray = constructionSquare.filelevel;
        //console.log(fileLevelArray);

        //获取1级路径对应位置index
        const fileIndex = filePathIndex(fileLevelArray);
        //console.log(fileIndex);

        //使用index获取对应图片路径
        const url = constructionSquare.filepath[fileIndex];
        //console.log(url);   
        // filePathIndex = filePathIndex(constructionSquare);

        //定义style，将图片路径作为变量
        const styles =  {
		    backgroundImage: `url(${url})`,
		    width: '485px',
		    height: '150px',
		    padding: '0px' ,
		    backgroundRepeat:'no-repeat',
		    backgroundSize:'100% 100%',
		    boxShadow: '10px 10px 5px #888888',
		    
	}

        /**设置条件性CSS渲染
        **当鼠标进入对应方块，hover值为真，执行if内效果渲染
        **有悬停效果，包含：
        **span 对应文字(title)
        **img 封面图片
        **当鼠标离开方块，hover值为假，执行else内效果渲染
        **正常效果，包含：
        **div图片方块
        **/
        if(this.state.hover){
    	    return (
                <div 
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}>
                    {constructionSquare 
                        ? 
                        (<div 
        	                style={{width: '495px', height: "150px", padding:"0px", position:"relative"}} >
                            <span className='squaretext'>
                                {constructionSquare.title}
                            </span>
                            <img style={{opacity: "0.3", position: "absolute", zIndex: '1', top: '0', left:'0', right: '0',bottom:'0',width: "100%", height:"100%"}} src={url} alt=""/>
                        </div>) 
                        : 
                        (<div></div>)
                    }
                </div>
            )
        }
        else {
	        return (
                <div 
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}>
                    {constructionSquare 
                        ? 
                        (<div style={styles} >
                     	
                        </div>)
                        : 
                        (<div></div>)
                    }
                </div>
		    )
        }
    }   
}

 export default Square;


/**定位1级图片位置，并返回对应index
**@params array 
**每个数组只有唯一1值，输入数组，返回对应位置
**/
function filePathIndex (fileLevelArray) {
	for(let i = 0; i < fileLevelArray.length; i++){
		if(fileLevelArray[i] === 1){
			return i;
		}
	}
}