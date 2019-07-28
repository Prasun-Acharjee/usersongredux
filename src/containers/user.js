import React from "react";
import {connect} from "react-redux";

import Dispuser from "../components/dispuser";
class User extends React.Component{
    /*load=()=>
    {
        store.dispatch({type:null});
    }*/
    render(){
        return(
            
            <Dispuser usr={this.props.usrs}/>
            
        );
    }
}
const mapStateToProps=(store)=>
{
  return{usrs:store.u}
}
export default connect(mapStateToProps,null)(User);
