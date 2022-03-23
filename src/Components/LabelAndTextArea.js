export const LabelAndTextArea = ({ onChange, textValue, labelValue }) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <label className="Twitter-label">{labelValue}</label>
      <br />
      <br />
      <div>
        <textarea
          className="Text-field"
          placeholder="Type Here!"
          onChange={onChange}
          value={textValue}
        />
      </div>
    </div>
  );
};
