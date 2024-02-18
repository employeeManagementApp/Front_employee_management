import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "../../../../pictures/avatar.png"
import { FaFolder } from "react-icons/fa";
import "./AllProject.css";

const AllProject = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showList, setShowList] = useState(true);
  const [searchUserTerm, setSearchUserTerm] = useState("");
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [contributors, setContributors] = useState([]);
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/project/all`);
      setData(response.data);
    };
    fetchData();
  }, [baseUrl]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/user/all`);
      setUserData(response.data);
    };
    fetchData();
  }, [baseUrl]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleUserSearch = (e) => {
    setSearchUserTerm(e.target.value);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  
  };
  useEffect(()=>{
    handleAddContributor()
  })

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowList(false);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowList(true);
  };

  const handleAddContributor = () => {
    if (selectedUser) {
      if(!contributors.includes(selectedUser)){
        setContributors((prevContributors) => [
          ...prevContributors,
          selectedUser,
        ]);
      }
      setSelectedUser(null);
    }
  };

  const handleRemoveContributor = (contributor) => {
    setContributors((prevContributors) =>
      prevContributors.filter((c) => c.id !== contributor.id)
    );
  };

  const filteredData = data.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredUserData = userData.filter(
    (user) =>
      user.firstname.toLowerCase().includes(searchUserTerm.toLowerCase()) ||
      user.lastname.toLowerCase().includes(searchUserTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchUserTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search project by name"
          value={searchTerm}
          onChange={handleSearch}
          className="search-barre"
        />
      </div>

      {showList && (
        <div className="grid-container">
          {filteredData.map((project) => (
            <div
              className="item"
              key={project.id}
              onClick={() => handleProjectClick(project)}
            >
              <div className="photo project-img-list"></div>
              <p>
                <FaFolder fontSize={50} color="#8585ee"></FaFolder>
              </p>
              {project.name}
            </div>
          ))}
        </div>
      )}

      {selectedProject && (
        <div className="modal">
          <div className="admin-action">
            <span className="close actions" onClick={handleCloseModal}>
              Close
            </span>
            <p className="actions">Add a contributors</p>
          </div>
          <div className="modal-content">
            <div className="project-details">
              <h2>{selectedProject.name}</h2>
              <p className="project-description">
                {selectedProject.description}
              </p>
            <div>
                <form>
                  <div className="contributors-content">
                    <input
                      type="text"
                      className="search-barre search-user"
                      placeholder="Search by name or email"
                      value={searchUserTerm}
                      onChange={handleUserSearch}
                    />
                    {searchUserTerm && (
                      <div className="search-result">
                        {filteredUserData.map((user) => (
                          <div
                            onClick={() => handleUserClick(user)}
                            key={user.id} className="contributor-profil"
                          >
                            <div>
                              <p>{user.firstname} {user.lastname}</p>
                              <p>{user.email}</p>
                            </div>
                            <div className="photo user-img-list contributor-img">
                            {user.profil ? (
                            <img src={`${baseUrl}/uploads${user.profil.replace("src/main/resources/static/saves", "")}`} alt="" className="imge" />
                            ) : (
                          <img src={Avatar} alt="" className="imge" />
                          )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="selected-contributors">
                  {contributors.map((contributor) => (
                    <div key={contributor.id} className="contributor">
                      <div>
                        <div className="photo user-img-list contributor-img">
                            {contributor.profil ? (
                            <img src={`${baseUrl}/uploads${contributor.profil.replace("src/main/resources/static/saves", "")}`} alt="" className="imge" />
                            ) : (
                            <img src={Avatar} alt="" className="imge" />
                            )}
                        </div>
                          <p>{contributor.firstname}</p>
                      </div>
                      <span
                        className="remove-contributor"
                        onClick={() => handleRemoveContributor(contributor)}
                      >
                        x
                      </span>
                    </div>
                  ))}
                </div>
                  <button type="button" className="add-contributor">
                    Add a contributor
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProject;
