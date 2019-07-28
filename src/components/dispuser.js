import React from "react";
const Dispuser=(props)=>
{
   return(props.usr?<ul>{props.usr.map((usr,index)=><li key={index}>Name:{usr.name}<br/><br/>Address:{usr.address}</li>)}</ul>:<p>No User</p>);
}
export default Dispuser;