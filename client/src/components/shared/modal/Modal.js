import React, { useState } from "react";
import { UseSelector, useSelector } from "react-redux";
import InputType from "./../Form/InputType";
import API from "./../../../services/API";

const Modal = () => {
  const [inventoryType, setInventoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [donarEmail, setDonarEmail] = useState("");
  const [hospitalEmail, setHospitalEmail] = useState("");

  const { user } = useSelector((state) => state.auth);

  //handle modal data

  const handleModalSubmit = async () => {
    try {
      if (!bloodGroup || !quantity) {
        return alert("Please provide all fields");
      }

      const { data } = await API.post("/inventory/create-inventory", {
        donarEmail,
        email: user?.email,
        organization: user?._id,
        inventoryType,
        bloodGroup,
        quantity,
      });

      if (data.success) {
        alert("New Record Created");
        window.location.reload();
      }
    } catch (error) {
      alert(error.response.data.message)
      console.log(error);
      window.location.reload();

    }
  };

  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Manage Blood Record
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="d-flex">
                Blood Type: &nbsp;
                <div className="form-check">
                  <input
                    type="radio"
                    name="inRadio"
                    defaultChecked
                    value={"in"}
                    onChange={(e) => setInventoryType(e.target.value)}
                    className="form-check-input"
                  />
                  <label htmlFor="in" className="form-check-label">
                    IN
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="inRadio"
                    value={"out"}
                    onChange={(e) => setInventoryType(e.target.value)}
                    className="form-check-input"
                  />
                  <label htmlFor="out" className="form-check-label">
                    OUT
                  </label>
                </div>
              </div>
              &nbsp;
              <select
                className="form-select fs-5 "
                aria-label="Default select example"
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                <option defaultValue={"Open this select menu"}>Select Blood Group</option>
                <option key={"O+"} value={"O+"}>
                  O+
                </option>
                <option key={"O-"} value={"O-"}>
                  O-
                </option>
                <option key={"AB+"} value={"AB+"}>
                  AB+
                </option>
                <option key={"AB-"} value={"AB-"}>
                  AB-
                </option>
                <option key={"A+"} value={"A+"}>
                  A+
                </option>
                <option key={"A-"} value={"A-"}>
                  A-
                </option>
                <option key={"B+"} value={"B+"}>
                  B+
                </option>
                <option key={"B-"} value={"B-"}>
                  B-
                </option>
              </select>
              {inventoryType === "in" && (
                <InputType
                  labelText={"Donar Email"}
                  labelFor={"donarEmail"}
                  inputType={"email"}
                  value={donarEmail}
                  onChange={(e) => setDonarEmail(e.target.value)}
                />)}
              {inventoryType === "out" && (
                <InputType
                  labelText={"Hospital Email"}
                  labelFor={"hospitalEmail"}
                  inputType={"email"}
                  value={hospitalEmail}
                  onChange={(e) => setHospitalEmail(e.target.value)}
                />)}

              <InputType
                labelText={"Quantity (ML)"}
                labelFor={"quantity"}
                inputType={"Number"}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleModalSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
