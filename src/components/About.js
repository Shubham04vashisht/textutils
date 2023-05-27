import React from "react";

export default function About(props) {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <div className="accordion" id="accordionExample" style={{ width: "70%"}}>
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'rgb(7 7 43)':'white'}}
            >
              <strong>Convert to Uppercase</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: props.mode==="dark"?"white":"black" ,
                                                    backgroundColor: props.mode==="dark"?"rgb(7 7 43 / 86%)":"white" }} >
              This property enables to convert the text present in the textarea
              to uppercase. For example: <strong>this Is mY pen </strong>
              will be converted to <strong>THIS IS MY PEN</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'rgb(7 7 43)':'white'}} 
            >
              <strong>Convert to Lowercase</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: props.mode==="dark"?"white":"black" ,
                                                    backgroundColor: props.mode==="dark"?"rgb(7 7 43 / 86%)":"white" }} >
              This property enables to convert the text present in the textarea
              to lowercase. For example: <strong>this Is mY pen</strong> will be
              converted to <strong>this is my pen</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'rgb(7 7 43)':'white'}} 
            >
              <strong>Copy Text</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: props.mode==="dark"?"white":"black" ,
                                                    backgroundColor: props.mode==="dark"?"rgb(7 7 43 / 86%)":"white" }} >
              This property enables to copy the text to the clipboard.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour" 
              aria-expanded="false"
              aria-controls="collapseFour"
              style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'rgb(7 7 43)':'white'}} 
            >
              <strong>Clear Extra Whitespaces</strong>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: props.mode==="dark"?"white":"black" ,
                                                    backgroundColor: props.mode==="dark"?"rgb(7 7 43 / 86%)":"white" }} >
              This property enables to remove extra white spaces present in the textarea. For example: <strong> this &nbsp;&nbsp; &nbsp; &nbsp; Is mY&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; pen </strong> will be converted to <strong> this Is mY pen</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
