import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  // const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          if (formType === "login") handleLogin(e, email, password, role);
          else if (formType === "register")
            handleRegister(
              e,
              email,
              password,
              role,
              name,
              organizationName,
              hospitalName,

              address,
              phone
            );
        }}
      >
        <div className="container glass">
          <h1 className="text-center">{formTitle}</h1>
          <hr />

          <div className="d-flex mb-3 ">
            <div className="form-check form-check-inline a-center j-center">
              <input
                type="radio"
                className="form-check-input"
                name="role"
                id="donarRadio"
                value={"donar"}
                onChange={(e) => setRole(e.target.value)}
                defaultChecked
              />
              <label htmlFor="donarRadio" className="form-check-label">
                Donar
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="role"
                id="adminRadio"
                value={"admin"}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="adminRadio" className="form-check-label">
                Admin
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="role"
                id="organizationRadio"
                value={"organization"}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="organizationRadio" className="form-check-label">
                Organization
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="role"
                id="hostipalRadio"
                value={"hostipal"}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="hostipalRadio" className="form-check-label">
                Hospital
              </label>
            </div>
          </div>

          {/* switch statement */}
          {(() => {
            //eslint-disable-next-line
            switch (true) {
              case formType === "login": {
                return (
                  <>
                    <InputType
                      labelText={"Email"}
                      labelFor={"forEmail"}
                      id={"forEmail"}
                      inputType={"email"}
                      name={"email"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autocomplete="off"
                    />
                    <InputType
                      labelText={"Password"}
                      labelFor={"forPassword"}
                      id={"forPassword"}
                      inputType={"password"}
                      name={"password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </>
                );
              }
              case formType === "register": {
                return (
                  <>
                    {(role === "donar" || role === "admin") && (
                      <InputType
                        labelText={"Name"}
                        labelFor={"forName"}
                        id={"forName"}
                        inputType={"name"}
                        name={"name"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    )}
                    {role === "organization" && (
                      <InputType
                        labelText={"Organization Name"}
                        labelFor={"forOrganizationName"}
                        id={"forOrganizationName"}
                        inputType={"organizationName"}
                        name={"organizationName"}
                        value={organizationName}
                        onChange={(e) => setOrganizationName(e.target.value)}
                      />
                    )}
                    {role === "hostipal" && (
                      <InputType
                        labelText={"Hospital Name"}
                        labelFor={"forHospitalName"}
                        id={"forHospitalName"}
                        inputType={"hospitalName"}
                        name={"hospitalName"}
                        value={hospitalName}
                        onChange={(e) => setHospitalName(e.target.value)}
                      />
                    )}
                    <InputType
                      labelText={"Email"}
                      labelFor={"forEmail"}
                      id={"forEmail"}
                      inputType={"email"}
                      name={"email"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputType
                      labelText={"Password"}
                      labelFor={"forPassword"}
                      id={"forPassword"}
                      inputType={"password"}
                      name={"password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* <InputType
                      labelText={"Website"}
                      labelFor={"forWebsite"}
                      id={"forWebsite"}
                      inputType={"website"}
                      name={"website"}
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    /> */}
                    <InputType
                      labelText={"Address"}
                      labelFor={"forAddress"}
                      id={"forAddress"}
                      inputType={"address"}
                      name={"address"}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <InputType
                      labelText={"Phone"}
                      labelFor={"forPhone"}
                      id={"forPhone"}
                      inputType={"phone"}
                      name={"phone"}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </>
                );
              }
            }
          })()}

          <div className="d-flex flex-column ">
            <button type="submit" className="btn btn-outline-success">
              {submitBtn}
            </button>

            {formType === "login" ? (
              <p>
                Not Registered yet ? Register
                <Link to="/register"> Here !</Link>
              </p>
            ) : (
              <p>
                Already a user?
                <Link to="/login"> Login Here !</Link>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
