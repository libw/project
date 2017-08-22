import style from  "./index.css"
import React from 'react';
import Prephone from "./prephone/index";
import FormItem from "./input/index";

class Register extends React.Component{
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
            },
            iscli:true
        }
    }
    render(){
        // var usernmerules: [
        //     {
        //         pattern: function (value) {
        //             return value.length > 0;
        //         },
        //         error: '请输入用户名'
        //     },
        //     {
        //         pattern: /^.{1,4}$/,
        //         error: '用户名最多4个字符'
        //     }
        // ]
        let flag=true;
        let istu=true;
        return(
            <div className={style.login}>
                <div className={style.logincontent}>
                    <div className={style.lctitle}>
                        注册海豚汇账号
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
                        <FormItem
                        //rules={usernmerules}
                        tt={"text"} pla={"请输入手机号"} st={{width:'220px',float:'right'}} rex={/^1[3|4|5|8][0-9]\d{4,8}$/} nn={'rphone'}/>

                    </div>
                    <div className={style.lccaptcha}>
                        <FormItem tt={"text"} pla={"请输入图形验证码"} st={{width:'100%'}}  isf={this.state.isFocus} />
                        <div className={style.captcha}>

                        </div>
                    </div>
                    <div className={style.lcmessage}>
                        <FormItem tt={"text"} pla={"请输入短信验证码"}   st={{width:'100%',float:'left'}}/>
                        <div className={style.butt}>
                            <button name="regm" onClick={this.state.iscli?this.timeOut.bind(this):null} style={istu?{color:"#fff"}:{color:"#3b3d40"}} >
                                <span>发送短信验证码</span>
                                <span >
                                    <span>60</span>s后重新获取
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className={style.lcfirstmm}>
                        <FormItem tt={"password"} pla={"密码6-24位字母、数字、字符"} st={{width:'100%'}} rex={/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/} nn={'pas1'}/>
                    </div>
                    <div className={style.lcregmm}>
                        <input type="password" placeholder="请再次输入密码"  style={{width:'100%'}} name='pas2' onBlur={this.regmm.bind(this)}/>
                        <span></span>
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

    //短信验证计时器
    timeOut(){
        this.setState({
            iscli:false
        });
        console.log(this.state.iscli);
        if(!this.state.iscli){
            console.log(this.state.iscli);
            var t1=setInterval(t11 ,1000);
            var t2=setTimeout(t22.bind(this),60000);
            function t22(){
                document.querySelector("button[name='regm']>span:last-child>span").innerHTML=60;
                console.log(this.state.iscli);
                this.setState({
                    iscli:true
                })
                clearTimeout(t2);
            }
            function t11(){
                document.querySelector("button[name='regm']>span:last-child").style.display='block';
                document.querySelector("button[name='regm']>span:first-child").style.display='none';
                document.querySelector("button[name='regm']>span:last-child>span").innerHTML--;
                if(document.querySelector("button[name='regm']>span:last-child>span").innerHTML<0){
                    document.querySelector("button[name='regm']>span:last-child").style.display="none";
                    document.querySelector("button[name='regm']>span:first-child").style.display='block';
                    clearInterval(t1)
                }
            }
        }
    }


    regmm(){
        console.log(document.querySelector("input[name='pas1']").value);
        console.log(document.querySelector("input[name='pas2']").value);
        if((document.querySelector("input[name='pas1']").value==document.querySelector("input[name='pas2']").value)){

        }else {
            document.querySelector("input[name='pas2']+span").innerHTML="两次输入密码不同"
        }
    }

}

export default Register;

