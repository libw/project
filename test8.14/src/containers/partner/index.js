import React from 'react';
import style from "./index.css";

class Partner extends React.Component{
    render(){
        return(
            <div className={style.partner}>
                <div className={style.partnercon}>
                    <div className={style.partnertit}>
                        合作伙伴  /
                    </div>
                </div>
            </div>
        )
    }
}

export default Partner;