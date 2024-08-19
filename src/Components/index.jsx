import React, { useState } from "react";
import data from "./script.js";
import "./style.css";

const Accordian = () => {
  const [selection, setSelection] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentid) {
    console.log(getCurrentid);
    setSelection(selection === getCurrentid ? null : getCurrentid);
  }
  function handleMultiSelection(getCurrentid) {
    let cpymultiple = [...multiple];
    const findIndexofCurrentid = cpymultiple.indexOf(getCurrentid);
    console.log(findIndexofCurrentid);
    if (findIndexofCurrentid === -1) cpymultiple.push(getCurrentid);
    else cpymultiple.splice(findIndexofCurrentid, 1);
    setMultiple(cpymultiple);
  }
  return (
    <div className="wrapper">
      <button onClick={() => setMultiSelection(!multiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0
          ? data.map((dataItem) => (
              <div className="item">
                <div
                  className="title"
                  onClick={
                    multiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                >
                  <div>{dataItem.question}</div>
                  <span>+</span>
                </div>

                {multiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selection == dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
                {/* {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )} */}
              </div>
            ))
          : "No data present"}
      </div>
    </div>
  );
};

export default Accordian;
