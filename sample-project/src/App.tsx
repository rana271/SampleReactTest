import ListGroup from "./Component/ListGroup";
import FavColor from "./Component/FavColor";
import Message from "./Component/Message";
import Alert from "./Component/Alert";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./Component/Login";
import DashBoard from "./Component/DashBoard";
import Alert1 from "./Component/Alert1";
import Employee from "./Component/Employee";
import Details from "./Component/Details";
import Layout from "./Component/Layout";
import Users from "./Component/Users";
import Afterlogin from "./Afterlogin";
import HelloWorld from "./Component/HelloWorld";
import SampleEffect from "./RestAPI/SampleEffect";
import ProductList from "./RestAPI/ProductList";
import { useState, useContext, createContext } from "react";
import UserList from "./RestAPI/UserList";
import Sample1 from "./Sample/Sample";
import EmployeeList from "./Sample/EmployeeList";
import UserListSample from "./Sample/UserList";

import UserTable from "./Sample/UserTable";
import Form from "./Forms/Form";
import FormRef from "./Forms/FormRef";
import FormState from "./Forms/FormState";

import React from "react";
// const [employee, setEmployee] = useState({
//   Id: 101,
//   Name: "Pragim",
//   Location: "Bangalore",
//   Salary: 12345,
// });
//const employeeContext = createContext();
function App() {
  const [category, setCatagorey] = useState("");
  let items = ["Kolkata", "Delhi", "Mumbai", "Bangalore", "Chennai"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Form></Form>
      {/* <employeeContext.Provider value={employee}>
        <EmployeeContext></EmployeeContext>
      </employeeContext.Provider> */}

      {/* <UserTable></UserTable> */}
      {/* <UserTable></UserTable> */}
      {/* <UserListSample></UserListSample> */}
      {/* <UserListTable></UserListTable> */}
      {/* <UserList></UserList> */}
      {/* <EmployeeList></EmployeeList> */}
      {/* <select
        className="product select"
        onChange={(e) => setCatagorey(e.target.value)}
      >
        <option value=""></option>
        <option value="Rana">Rana</option>
        <option value="kumar">Kumar</option>
      </select>
      <EmployeeList category={category}></EmployeeList> */}
      {/* <SampleEffect></SampleEffect> */}
      {/* <ProductList category={category}></ProductList> */}
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="alert" element={<Alert1 />} />
          <Route path="emp" element={<Employee />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="user" element={<Users />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Layout></Layout> */}
      {/* <ListGroup
        heading="Hello My Head"
        items={items}
        onSelectItem={handleSelectItem}
      /> */}
      {/* <FavColor></FavColor> */}
      {/* <Message text="Hello My First Property"></Message> */}
      {/* <Alert>
        <p>Hello Alert</p>
      </Alert>
      < */}
      {/* <FavColor></FavColor> */}
      {/* <Afterlogin></Afterlogin> */}
      {/* <HelloWorld></HelloWorld> */}
    </div>
  );
}

export default App;
