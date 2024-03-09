import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home.jsx";
import Layout from "./Layout.jsx";
import Aboutus from "./Aboutus.jsx";
import Profile from "./Profile.jsx";
import Notes from "./Notes.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Schedule from "./Schedule.jsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route
              path="profile"
              element={
                // <ProtectedRoute>
                  <Profile />
                /* </ProtectedRoute> */
              }
            />
            <Route path="schedule" element={<Schedule />} />
            <Route path="notes" element={<Notes />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;


