import { useState } from "react";
import "./Button.css";

const Button = ({ handleAdd, handleRemove }) => {
  const [added, setAdded] = useState(false);

  const clickAdd = () => {
    handleAdd();
    setAdded(true);
  };

  const clickRemove = () => {
    handleRemove();
    setAdded(false);
  };

  return (
    <>

      {added ? (
        <button type="button" className="removeButton" onClick={clickRemove}>
          Remove
        </button>
      ) : (
        <button type="button" className="addButton" onClick={clickAdd}>
          Add to Cart
        </button>
      )}

    </>
  );
};

export default Button;
