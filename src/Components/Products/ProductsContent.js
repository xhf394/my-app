import React from 'react';
import './ProductsContent.css';


class ProductContent extends React.Component {



    render() {
        //获取图片路径
        const filePath = this.props.url;
 
    	return (
            /**
             * container 整个产品销售区域
             * productsContent-imgs 图片区域
             * img 单张图片
             * productsContent-text 文字区域 (标题div & 内容div)
             */
    		<div>
                    {filePath?
                        <img className="contentimg" src={filePath} alt=""/>
                        :
                        (<div></div>)}
            </div>

    		)
    }
}

export default ProductContent;