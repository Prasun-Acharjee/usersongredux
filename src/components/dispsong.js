import React from "react";
const Dispsong=(props)=>
{
   return(props.songs?<ul>{props.songs.map((songs,index)=><li key={index}>Title:{songs.title}<br/><br/>Singer:{songs.singer}</li>)}</ul>:<p>No Song</p>);
}
export default Dispsong;