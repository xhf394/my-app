import React from 'react';
import './ProductsContent.css';
import axios from 'axios';

class ProductContent extends React.Component {
    constructor(props){
        super(props);
        //初始化值
        this.state = {
            title: undefined,
            text: undefined,
            backColor: undefined,
            filePath: [],
            data:[]
        }
    }

    async componentDidMount() {
        //通过父组件循环获取对应id
        const id= this.props.id;

        //通过id号请求，获得，存入对应信息
        //包含title & 内容 & 颜色 & 图片路径 
        axios.get(`https://www.codeinboxes.com/dyne/index.php/api/articlemanager/getarticlebyidwithget?id=${id}`)
        .then((response) => {
            this.setState({
                title: response.data.title,
                text: response.data.text,
                backColor: response.data.backcolor,
                filePath: response.data.filepath,
                data:response.data

            })
        }           
            )
        .catch(function (error) {
          console.log(error)
         })   

    
    }
    

    render() {
        //获取图片路径
        const filePath = this.state.filePath;
        
        //定义图片路径对应的空白数组
        const filePathArray = Array(filePath.length).fill(null);

        //浅备份图片显示区
        const filePathSquares = filePathArray.slice();

        //获取产品内容并初次转换HTML实体
        const Entities = require('html-entities').XmlEntities;
        const entities = new Entities();
        const text = entities.decode(this.state.text);

        //设定CSSstyle变量值为数组中的backColor
        const styles={
            backgroundColor: `${this.state.backColor}`,
            lineHeight:'40px',
            textIndent:'0px',
            color:'white',
            boxShadow:'10px 10px 5px #888888',
        }
 
    	return (
            /**
             * container 整个产品销售区域
             * productsContent-imgs 图片区域
             * img 单张图片
             * productsContent-text 文字区域 (标题div & 内容div)
             */
    		<div className="container_2 " style={{display: 'flex'}}>
                <div className="productsContent-imgs" style={{display: "flex", flexDirection: "column"}}>

                    {filePathSquares?
                        (filePathSquares.map((column, columnIndex)=> {
                            return(
                                <img key={columnIndex} className="contentimg" src={filePath[columnIndex]} alt=""/>
                                )
                        }))
                        :
                        (<div></div>)}

                </div> 
                <div className="productsContent-text">
                    <div style={styles}>{this.state.title}</div>
                    <div dangerouslySetInnerHTML={{__html : text}}></div>
                </div> 
            </div>

    		)
    }
}

export default ProductContent;