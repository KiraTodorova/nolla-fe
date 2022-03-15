export const LabelAndTextArea = ({onChange, textValue, labelValue}) => {

return(

<div>
    <label className="Twitter-label">
         {labelValue}
    </label>
<div>
        <textarea
            className="Text-field"
            placeholder="Type Here!"
            onChange={onChange}
            value={textValue}
        />
</div>
</div>
)
}