import React, { useState, useEffect } from "react";
import "./AppointmentList.css";

function AppointmentList() {
  const [data, setData] = useState({});
  const clientId = 1; // Hardcoded client ID

  useEffect(() => {
    fetch(`/api/appointments/${clientId}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="appointment-list">
      <h1> Appointments for {data.clientName} </h1>{" "}
      <div className="poc-details">
        <h2> POC Name: {data.pocName} </h2>{" "}
        <h2> POC Specialization: {data.pocSpecialization} </h2>{" "}
      </div>{" "}
      <table>
        <thead>
          <tr>
            <th> S.No </th> <th> Date </th> <th> Day </th> <th> Time </th>{" "}
            <th> No.of Appointments Booked </th> <th> Total Slots </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {data.appointmentDetails &&
            data.appointmentDetails.map((appointment, index) => (
              <tr key={index}>
                <td> {appointment.sNo} </td> <td> {appointment.date} </td>{" "}
                <td> {appointment.day} </td> <td> {appointment.time} </td>{" "}
                <td> {appointment.noOfAppointments} </td>{" "}
                <td> {appointment.totalSlots} </td>{" "}
              </tr>
            ))}{" "}
        </tbody>{" "}
      </table>{" "}
    </div>
  );
}

export default AppointmentList;
