import React from 'react';
import "./index.css"

class FormItem extends React.Component{
    render(){
        console.log(this.props)
        return(

            <div>
                <input type={this.props.type} placeholder={this.props.placeholder} onFocus={this.onfocus.bind(this)}  onBlur={this.onbulr.bind(this)}/>
                <span></span>
            </div>
        )

    }
    //失去焦点
    onbulr (){
        this.style={
            outlineColor:"#dfdce4",
            boxShadow:"0 0 5px 5px transparent"
        }
    }
    //获取焦点
    onfocus(){
        console.log(this)
        this.style={
            outlineColor:"#5262ff",
            boxShadow:"0 0 5px 5px rgba(82,98,255,0.1)"
        }
    }
}

export default FormItem;