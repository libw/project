require("./index.less");
class Td extends React.Component{
    render(){
        // console.log(this.props.data);
        return(
            <tr>
                <td>
                    {this.props.data.price}
                </td>
                <td>
                    {this.props.data.count}
                </td>
                <td>
                    {this.props.data.total}
                </td>
            </tr>
        )
    }
}
export default Td;