import React from "react";
 
export default function Card(props) {
 

    



  return (
    
    <>
     
          <div className="card" style={{ width: "16%" }} >
            <div className="card-content">
              <div className="media ">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={props.turkeyflag} alt="Placeholder image" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{props.cur} <br/> {props.currency} {props.symbolC}</p>
                  {/* <p style={{margin:"0px"}} className="subtitle is-6">{props.currency} {props.symbolC}</p> */}

                </div>
              </div>
            </div>
          </div>
       
    </>
  );
}
