import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Table = () => {
  const [user, setUser] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/getuser/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data.data));
  }, [id]);

  return (
    // display: "flex",
    <div className="container rounded border border-info border border-4" style={{ justifyContent: "flex-start", background: "pink", }}>
      <div className="table-responsive mt-5">
        <table className="table table-hover">
          <tbody>
            <tr>
              <td><b>Name:</b></td>
            </tr>
            <tr>
              <td>{user?.FirstName}</td>
            </tr>
            <tr>
              <td><b>Qualifications:</b></td>
            </tr>
            <tr>
              <td>{user?.Qualifications}</td>
            </tr>
            <tr>
              <td><b>Work History:</b></td>
            </tr>
            <tr>
              <td>{user?.WorkHistory}</td>
            </tr>
            <tr>
              <td><b>Interests & Hobbies:</b></td>
            </tr>
            <tr>
              <td>{user?.InterestsHobbies}</td>
            </tr>
            <tr>
              <td><b>Availability Date:</b></td>
            </tr>
            <tr>
              <td>{user?.AvailabilityDate}</td>
            </tr>
            <tr>
              <td><b>Email:</b></td>
            </tr><tr>
              <td>{user?.Email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
