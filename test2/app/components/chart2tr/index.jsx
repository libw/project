require("./index.less");
class Td extends React.Component{

    render(){
        var t=this.getTime();
        return(
            <tr>
                <td>
                    {this.props.data.price}
                </td>
                <td>
                    {this.props.data.count}
                </td>
                <td>
                    {
                      t
                    }
                </td>
                <td>
                    {this.props.data.kind}
                </td>
            </tr>
        )
    }
    getTime(){
        var time=new Date;
        return [
            time.getHours(),
            time.getMinutes(),
            time.getSeconds()
        ].join(":")

    }
}
export default Td;