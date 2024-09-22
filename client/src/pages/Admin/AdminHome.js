import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin{" "}
            <i className="text-success">
              {user?.name.charAt(0).toUpperCase() + user?.name.slice(1)}
            </i>
          </h1>
          <h1> </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            Welcome to the Blood Bank Management System Admin Panel! Here, you wield the power to oversee and manage every aspect of our blood bank operations, including the ability to delete users when necessary. Whether it's ensuring data accuracy, maintaining system integrity, or managing access levels, you have the authority to make critical decisions that uphold the efficiency and security of our platform. Your role is pivotal in maintaining a seamless experience for donors, recipients, and staff alike. Thank you for your dedication to our cause and for your commitment to saving lives.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
