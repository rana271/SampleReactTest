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
function App() {
  let items = ["Kolkata", "Delhi", "Mumbai", "Bangalore", "Chennai"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="alert" element={<Alert1 />} />
          <Route path="emp" element={<Employee />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="user" element={<Users />} />
        </Routes>
      </BrowserRouter>
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
    </div>
  );
}

export default App;
