import React from "react";
import {connect} from "react-redux";

import Dispsong from "../components/dispsong";
class Song extends React.Component{

    render(){
        return(
            <Dispsong songs={this.props.song}/>
        );
    }
}
const mapStateToProps=(store)=>
{
  return{song:store.s}
}
export default connect(mapStateToProps,null)(Song);
