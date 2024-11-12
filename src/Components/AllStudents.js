import { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported here or in index.js
import { Dropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";


const AllStudents = () => {
  const [unauthorized, setUnauthorized] = useState(false);
  const [records, setRecords] = useState([]);
  const navigate = useHistory();

  const loadEdit = (id) => {
    navigate.push("/UpdateStudent/" + id);
  };

  const LoadStudent = (id) => {
    navigate.push("/VendorDetails/" + id);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    axios
      .get("http://localhost:4000/api/getStudent", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 403) {
          setUnauthorized(true);
        } else {
          console.error("Error fetching data:", err);
        }
   });
 }, []);

  return (
    <div className="d-flex justify-content-center align-items-center mx-auto col-lg-12 w-100">
      <div className="mt-3">
        <h5>All Students Details</h5>
        <div className="table-responsive">
          <table className="table table-bordered table-md">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r, i) => (
                <tr key={i}>
                  <td>{r.firstname}</td>
                  <td>{r.lastname}</td>
                  <td>{r.gender}</td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="default" id="dropdown-basic" size="md">
                        Perform Actions
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Link
                          to="/action-1"
                          className="dropdown-item"
                          onClick={(e) => {
                            e.preventDefault();
                            LoadStudent(r._id);
                          }}
                        >
                          Details
                        </Link>
                        <Link
                          to="/UpdateStudent/:_id"
                          className="dropdown-item"
                          onClick={(e) => {
                            e.preventDefault();
                            loadEdit(r._id);
                          }}
                        >
                          Edit Student
                        </Link>
                        {/* Uncomment this to add the Delete option
                        <Link
                          to="/delete"
                          className="dropdown-item"
                          onClick={(e) => {
                            e.preventDefault();
                            LoadDelete(r.vendor_id);
                          }}
                        >
                          Delete
                        </Link> */}
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
