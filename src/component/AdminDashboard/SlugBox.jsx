import React from 'react'

const SlugBox = ({ value, text, handleSlug }) => {
  return (
    <div>
      <div className="input-box-wraper">
        <label htmlFor="">Cours Slug URl *</label>
        <div className="input-box-element">
          <input
            type="text"
            placeholder={text}
            min="1"
            max="50"
            value={value}
            onChange={handleSlug}
            className="text-muted"
          />
        </div>
      </div>
    </div>
  );
};

export default SlugBox