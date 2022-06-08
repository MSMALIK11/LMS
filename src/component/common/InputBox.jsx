import React from 'react'

const InputBox = ({
  handleChange,
  name,
 
  titleValue,text,
  title = false,
}) => {
  return (
    <div className="input-box-wraper">
      <label htmlFor="">Course Title *</label>
      <div className="input-box-element">
        <input
          type="text"
          placeholder={text}
          onChange={handleChange}
          name={name}
          min="1"
          max="60"
       
         
        />
        {title && (
          <span
            className={` title-lenght-tag ${
              titleValue > 50 ? "bg-danger" : ""
            }`}
          >
            <span>{titleValue < 50 ? 50 - titleValue : "0"}</span>
          </span>
        )}
      </div>
      {titleValue > 60 && (
        <span className="text-danger text">
          {" "}
          Title must be less than 60 word
        </span>
      )}
    </div>
  );
};

export default InputBox