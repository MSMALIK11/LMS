import React from 'react'

const InputTextArea = ({ handleChange,name }) => {
  return (
    <div className="input-box-wraper">
      <label>Description</label>

      <textarea className="text-area" name={name} onChange={handleChange} />
    </div>
  );
};

export default InputTextArea