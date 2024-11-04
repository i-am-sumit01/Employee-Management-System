import React, { useContext, useEffect, useState } from 'react';
import Login from './Components/Auth/Login';
import Header from './Components/Others/Header';
import EmploeeDashboard from './Components/Dashboard/EmploeeDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './Utils/localStorage';
import { AuthContext } from './Context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state
  const AuthData = useContext(AuthContext);

  const employeeObj = AuthData?.employees || [];
  const adminObj = AuthData?.admin || [];

  useEffect(() => {
    // Initialize local storage if necessary
    setLocalStorage();
    getLocalStorage();

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
      setUser(loggedInUser.role);

      if (loggedInUser.role === 'employee' && employeeObj.length > 0) {
        const employeeData = employeeObj.find((e) => e.email === loggedInUser.email);
        setLoggedInUserData(employeeData || { firstName: "Guest" }); // Set default if no employee found
      }
    }
    setLoading(false); // Set loading to false after data load attempt
  }, [AuthData]);
  // console.log(AuthData.admin)
  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      // setUser('admin');
      // setLoggedInUserData(AuthData.admin);
      if (adminObj) {
        setUser('admin');
        setLoggedInUserData(adminObj);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', email }));
      } else {
        alert('Invalid Credentials');
      }
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', email }));
    } else if (employeeObj.length > 0) {
      const employee = employeeObj.find((e) => email == e.email && e.password == password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', email }));
      } else {
        alert('Invalid Credentials');
      }
    } else {
      alert('Invalid Credentials');
    }
  };
  // console.log(adminObj)

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator
  }
  // console.log(loggedInUserData)

  return (
    <div>
      <Header user={loggedInUserData ? loggedInUserData.firstName : "Guest"} />
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === 'admin' ? (
        <AdminDashboard data={loggedInUserData} />
      ) : user === 'employee' ? (
        <EmploeeDashboard data={loggedInUserData} />
      ) : null}
    </div>
  );
};

export default App;
