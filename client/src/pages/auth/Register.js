import React from "react";
import Form from "../../components/shared/Form/From";

const Register = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-4 form-container">
          <Form

            formTitle={"Registration Page"}
            submitBtn={"Register"}
            formType={"register"}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
