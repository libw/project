import React from 'react';
import style from "./index.css"

class FormItem extends React.Component{
    render(){
        var isff=false;
        return(
            <div className={style.inp} style={this.props.st}>
                <input type={this.props.tt} placeholder={this.props.pla} onFocus={this.onfocus.bind(this)} onBlur={this.onbulr.bind(this)} className={isff?"foc":"blu"} name={this.props.nn}/>
                <span className={style.tip}>

                </span>
            </div>
        )
    }
    //失去焦点
    onbulr (){
        console.log(this.props.rex);
        console.log(("input[name='"+this.props.nn+"']").value)
        if((new RegExp(this.props.rex)).test(document.querySelector("input[name='"+this.props.nn+"']").value)){
            document.querySelector("input[name='"+this.props.nn+"']+span").innerHTML="";
        }else {
            document.querySelector("input[name='"+this.props.nn+"']+span").innerHTML="请输入正确格式";
        }
    }
    //获取焦点
    onfocus(){
        console.log(this);

    }
}

export default FormItem;