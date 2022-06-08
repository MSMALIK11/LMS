import React from 'react'

const ImagePreview = ({ preview, handleImage }) => {
  return (
    <div>
      <input type="file" name="image" accept="image/*" onChange={handleImage} />

      {preview !== "" && <img src={preview} width="350px" height="200px" alt="thumbnail preview" />}
    </div>
  );
};

export default ImagePreview