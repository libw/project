require("./index.less");
import Td from "../../../components/chart2tr";
class Charttwo extends React.Component{
    render(){
        return(
            <div className="charttwo">
                <header>
                    Recent Trades (XBTUSD)
                </header>
                <div className="table2">
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