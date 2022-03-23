import { Component } from "react";

export const SubmitAndResetButtons = (props) => {
  return (
    <div>
      <br />
      <button className="Twitter-button" onClick={props.handleSubmit}>
        {props.submitLabel}
      </button>
      {props.hideReset ? null : (
        <button className="Twitter-button2" onClick={props.handleReset}>
          {props.resetLabel}
        </button>
      )}
      <br />
      <br />
      <br />
    </div>
  );
};
