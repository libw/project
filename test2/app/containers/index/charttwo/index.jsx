import style from './index.css';
import Td from "../../../components/chart2tr";
class Charttwo extends React.Component{
    render(){
        return(
            <div className={style.charttwo}>
                <header>
                    Recent Trades (XBTUSD)
                </header>
                <div className={style.table2}>
                    <table>
                        <tbody>
                        {
                            this.props.data.map((item,i)=>{
                                return <Td data={item} key={i}/>
                            })
                        }

                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}
export default Charttwo;