import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "./../../../services/API";
// import { toast } from 'react-toastify';


export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password, phone }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password, phone });
      console.log("API Response: ", data)
      //store token
      if (data.success) {
        localStorage.setItem("token", data.token);
        // toast.success(data.message); 
        alert(data.message)
        window.location.replace('/');

      }
      return data;

    } catch (error) {
      if (error.response && error.response.data.message) {
        console.log(error)
        return rejectWithValue(error.response.data.message);

      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


//register

export const userRegister = createAsyncThunk(
  'auth/register',
  async ({
    email,
    password,
    role,
    name,
    organizationName,
    hospitalName,
    website,
    address,
    phone,
  }, { rejectWithValue }) => {
    try {
      const { data } = await API.post('/auth/register', {
        email,
        password,
        role,
        name,
        organizationName,
        hospitalName,
        website,
        address,
        phone
      })

      if (data?.success) {
        alert("Registration Successfull")
        // toast.success("Registration Successfull")
        window.location.replace('/login');
      }

    } catch (error) {
      console.log(error)
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)

//Current USer

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get('/auth/current-user')
      if (res?.data) {
        return res?.data;
      }
    } catch (error) {
      console.log(error)
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)