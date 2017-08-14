import "./index.less";
import Chartone from "./chartone";
import Charttwo from "./charttwo";
import $ from "./jquery";
class Index extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           data:''
       }
   }
    render(){
        // console.log(this.state.data);
        return (
            <div className="content">
                <Chartone data={this.state.data}/>
                <Charttwo data={this.state.data[2]}/>

            </div>
        )
    }
    componentWillMount(){
        var that = this;
        this.getData(that);
    }
    getData (that) {
        console.log(that.state.data);

        $.ajax({
            type: "get",
            url: 'data.json',
            cache:false,
            async:false,
            success: function(data){
                that.setState({
                    data:data
                })
            }
        });

    }
}

export default Index;