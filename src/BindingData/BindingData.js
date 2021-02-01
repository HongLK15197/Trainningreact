import React, { Component } from "react";
import cssBinding from "./BindingData.module.css";

export default class BindingData extends Component {
  render() {
    //Binding biến
    let title = "Hello - Bootcamp 01";
    let name = "Ares";
    let srcImg = "https://picsum.photos/200/200";

    let cardName = "IPhone X";
    let cardPrice = "10.000 VND";

    // Render hàm
    let renderText = () => {
      //Trà về chuỗi hoặc số hoặc đoạn html react(jsx)
      let obStyle = { fontWeight: "bold", color: "red", textAlign: "center" };
      let textContent = "Ares";
      return (
        <div>
          <h1 style={obStyle} className={`${cssBinding.title}`}>
            Hello {textContent}
          </h1>
        </div>
      );
    };

    return (
      <div>
        <h1 className="text-center">Binding Data</h1>
        {/* Render theo biến */}
        <div className="bg-dark">
          <p className="text-info display-3">Bingding Biến</p>
          <div>
            <h1 className="text-center text-success">{title}</h1>
            <p className="text-center text-success display-4">Welcome {name} to Cyberbersoft</p>
          </div>

          <div>
            <div className="card w-25">
              <img className="card-img-top" src={srcImg} alt="thisImg" />
              <div className="card-body">
                <h4 className="card-title">{cardName}</h4>
                <p className="card-text card-footer">{cardPrice}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Render theo hàm */}
        <div>{renderText()}</div>
      </div>
    );
  }
}
