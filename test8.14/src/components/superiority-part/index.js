import React from 'react';
import style from "./index.css";


class Support extends React.Component{
    render(){
        return(
            <a href="javascript:void (0);" className={style.superiorityport}>
                <div className={style.suppicon}>
                    <i className="fa fa-ravelry fa-5x"></i>
                </div>
                <div className={style.suppfont}>
                    <div className={style.suppftitle}>
                        资质合规
                    </div>
                    <div className={style.suppfcontent}>
                        香港证监会认可持牌发团<br/>持有第1/2/4/9类拍照
                    </div>
                </div>
            </a>
        )
    }
}

export default Support;