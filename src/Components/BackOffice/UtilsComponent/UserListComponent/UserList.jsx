import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "../../../../pictures/avatar.png";
import Chartt from "../../../Chart/chart"
import Chart2 from "../../../Chart2/chart2"
import "./UserList.css";

const UserList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showList, setShowList] = useState(true);
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/user/all`);
      setData(response.data);
    };
    fetchData();
  }, [baseUrl]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setShowList(false);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setShowList(true);
  };

  const filteredData = data.filter(
    (user) =>
      user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={handleSearch}
          className="search-barre"
        />
      </div>

      {showList && (
        <div className="grid-container">
          {filteredData.map((user) => (
            <div className="item" key={user.id} onClick={() => handleUserClick(user)}>
              <div className="photo user-img-list"><img src={Avatar} alt="" className="imge" /></div>
              {user.firstname}
              <p>{user.lastname}</p>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}

      {selectedUser && (
        <div className="modal">
            <div className="admin-action">
              <span className="close actions" onClick={handleCloseModal}>Close</span>
              <p className="actions">Remove</p>
            </div>
          <div className="modal-content">
            <div className="user-details">
              <div className="employee-img-container">
                <img src={Avatar} alt="user-image" className="employee-img"/>
              </div>
              <h2>{selectedUser.firstname} {selectedUser.lastname}</h2>
              <p className="user-info">Email: {selectedUser.email}</p>
              <p className="user-info">Address: {selectedUser.address}</p>
              <p className="user-info">CIN: {selectedUser.cin}</p>
            </div>
            <div className="user-progress">
              <Chartt></Chartt>
              <Chart2></Chart2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
