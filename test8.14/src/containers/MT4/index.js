import React from 'react';
import style from "./index.css";
import Downbutton from "../../components/download-button/index"


class Mtdownload extends React.Component{
    render(){
        return(
            <div className={style.mt4}>
                <div className={style.mt4title}>
                    MT4交易终端下载
                </div>
                <div className={style.mt4download}>
                    <a href="javascript:void (0);" className={style.mt4bg}>
                        <img src="" alt=""/>
                    </a>
                    <div className={style.downloadlist}>
                        <Downbutton/>
                        <Downbutton/>
                        <Downbutton/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mtdownload;