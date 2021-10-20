import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const dropDownChange = (e) => {
    if (e !== undefined) {
      setValues({
        ...values,
        [e.name]: e.value,
      });
    }
  };

  return [values, handleInputChange, dropDownChange, reset];
};
