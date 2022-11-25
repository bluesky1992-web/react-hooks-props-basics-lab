import React from "react";
// import user from "../data/user";
import Links from "./Links"

//  const propsOfBio = props.bio

function About(props ) {
  
  function IsAppear(){
    if(props.bio){
      return (<p>{props.bio}</p>)
    }else if (props.bio === "" && props.bio === null) {
      return (<p>{null}</p>)
    }
  }
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* {props.bio && props.bio !== "" && <p>{props.bio}</p>} the above solution also work But this one is more concise  */}
     { IsAppear()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links 
      linkedin={props.linkedin}
      github={props.github}
      />
    </div>
  );
}

export default About;
