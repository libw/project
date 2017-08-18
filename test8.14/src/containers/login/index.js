import style from  "./index.css"
import React from 'react';
import Prephone from "./prephone/index";
import FormItem from "./input/index";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            prephone:[
                {
                    "area":"中国大陆",
                    "num":"+86"
                },
                {
                    "area":"中国台湾",
                    "num":"+886"
                },
                {
                    "area":"中国澳门",
                    "num":"+853"
                }
            ],
            sednum:{
                num:"+86"
            }
        }
    }
    render(){
        var flag=true;
        return(
            <div className={style.login}>
                <div className={style.logincontent}>
                    <div className={style.lctitle}>
                        注册海豚账号
                    </div>
                    <div className={style.lcphone}>
                        <div className={style.prephone}>
                            <div className={style.sedphone} onClick={this.prePhone.bind(this)} style={this.state.border}>
                                <span>{this.state.sednum.num}</span> <i className="fa fa-angle-down"></i>
                            </div>
                            <ul className={style.selphone} style={this.state.styles}>
                                {
                                    this.state.prephone.map((v,i)=>{
                                        return <Prephone key={i} data={v} get={this.getNum.bind(this)} />
                                    })
                                }
                            </ul>
                        </div>
                        <FormItem type={"text"} placeholder={"请输入手机号"}/>

                    </div>
                    <div className={style.lccaptcha}>
                        <formItem type  place  />
                        <input type="text" placeholder="请输入图形验证码" style={this.state.onfocus}/>
                        <div className={style.captcha}>

                        </div>
                    </div>
                    <div className={style.lcmessage}>
                        <input type="text" placeholder="请输入短信验证码"  style={this.state.onfocus}/>

                        <button>
                            发送短信验证码
                        </button>
                    </div>
                    <div className={style.lcfirstmm}>
                        <input type="password"  style={this.state.onfocus} placeholder="密码6-24位字母、数字、字符"/>
                    </div>
                    <div className={style.lcregmm}>
                        <input type="password"  style={this.state.onfocus} placeholder="请再次输入密码"/>
                    </div>
                    <div className={style.lcsubmit}>
                        <button >
                            完成注册并登录
                        </button>
                    </div>
                    <div className={style.gologin}>
                        <span>
                            已有账户、<a href="javascript:void (0);">直接登陆</a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    //点击切换电话前缀的显示状态
    prePhone(e){
        this.flag=!this.flag;
        if(this.flag){
            this.setState({
                styles:{
                    display:"block",
                },
                border:{
                    border:"1px solid #5262ff",
                    boxShadow:"0 0 5px 5px rgba(82,98,255,0.1)"
                }
            });
        } else {
            this.setState({
                styles: {
                    display: "none",
                },
                border:{
                    border:"1px solid #dfdce4",
                    boxShadow:"0 0 5px 5px transparent"
                }
            });
        }
    }

    //获取点击所得电话前缀，并恢复默认样式
    getNum(e){
        this.setState({
            sednum: {
                num: e
            },
            styles:{
                display:"none"
            },
            border:{
                border:"1px solid #dfdce4",
                boxShadow:"0 0 5px 5px transparent"
            }
        });
        this.flag=false;
    }
}

export default Login;