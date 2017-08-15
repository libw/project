import React from 'react';
import style from "./index.css";
import Support from "../../components/superiority-part/index";

class Superiority extends React.Component{
    render(){
        return(
            <div className={style.superiority}>
                <div className={style.suptop}>
                    <a href="javascript:void (0);" className={style.linkus}>
                        <i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp; 联系客服
                    </a>
                </div>
                <div className={style.supcontent}>
                    <Support/>
                    <Support/>
                    <Support/>
                </div>
            </div>
        )
    }
}

export default Superiority;