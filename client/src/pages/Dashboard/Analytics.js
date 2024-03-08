import React, { useState, useEffect } from "react";
import Header from "../../components/shared/Layout/Header";
import API from "./../../services/API";
import moment from "moment";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    "#4a4d71",
    "#4a4d71",
    "#4a4d71",
    "#4a4d71",
    "#4a4d71",
    "#4a4d71",
    "#4a4d71",
    "#4a4d71",
  ];

  //get blood group data
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.post("/analytics/bloodGroups-data");

      if (data?.success) {
        setData(data?.bloodGroupData);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //lifecycle method
  useEffect(() => {
    getBloodGroupData();
  }, []);

  //get function
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) {
        setInventoryData(data?.inventory);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBloodRecords();
  }, []);

  return (
    <>
      <Header />
      <div className="d-flex flex-row flex-wrap">
        {data?.map((record, i) => (
          <div
            className="card m-2 p-1 "
            key={i}
            style={{
              width: "22rem",
              height: "14rem",
              backgroundColor: `${colors[i]}`,
            }}
          >
            <div className="card-body">
              <h3 className="card-title bg-light  text-dark text-center mb-3">
                {record.bloodGroup}
              </h3>
              <p className="card-text text-light ">
                Total In:<b> {record.totalIn} ml</b>
              </p>
              <p className="card-text text-light">
                Total Out:<b> {record.totalOut} ml</b>
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item text-light bg-dark text-center ">
                Total Available :<b> {record.availableBlood}</b>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="container my-3">
        <h1 className="my-3">Recent Blood Transactions</h1>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Donar Email</th>
              <th scope="col">TIme & Date</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity} (ML)</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytics;
