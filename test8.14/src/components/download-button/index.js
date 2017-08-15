import React from 'react';
import style from "./index.css";

class Downbutton extends React.Component{
    render(){
        return(
            <a href="javascript:void (0);" className={style.downbutton}>
                <i className="fa fa-windows"></i> &nbsp;windows下载
            </a>

        )}
}

export default Downbutton;