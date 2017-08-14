import style from './index.css';

import Td from "../../../components/chart1tr";
class Chartone extends React.Component{
    render(){
        console.log(this.props.data[2])
        return(

            <div className={style.chartone}>
                <header>
                    委托列表 (XBTUSD)
                </header>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th>价格</th>
                            <th>目前仓位数量</th>
                            <th>总</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.data[0].map((item,i)=>{
                            return <Td data={item} key={i}/>
                        })
                    }
                    </tbody>
                </table>
                <p>
                    {
                        this.props.data[2][1].price
                    }
                </p>
                <table>
                    <tbody>
                    {
                        this.props.data[1].map((item,i)=>{
                            return <Td data={item} key={i}/>
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Chartone;