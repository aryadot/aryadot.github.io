import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      placeholder="Appointment Name"
    />
    <ContactPicker
      name="contact"
      value={contact}
      onChange={(e) => setContact(e.target.value)}
      contacts={contacts}
    />
    <input
      type="date"
      name="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      min={getTodayString()}
      required
    />
    <input
      type="time"
      name="time"
      value={time}
      onChange={(e) => setTime(e.target.value)}
      required
    />
    <input
      type="submit"
      value="Add Appointment"
    />
  </form>
  );
};
