import React from "react";

const FormErrors = ({ show, formErrors }) => {
  if (!show) return <div></div>;

  return (
    <div className="form-container">
      {Object.keys(formErrors).map((fieldName, i) => {
        if (formErrors[fieldName].length > 0) {
          return (
            <h3 key={i} className="input-error">
              {fieldName} {formErrors[fieldName]}
            </h3>
          );
        } else return "";
      })}
    </div>
  );
};

export default FormErrors;
