import { useState } from "react";
import { Navbar } from "./Components";
import Button from "@mui/material/Button";
import { createContact } from "./services/contacts";

/* {
  "name": "titino",
  "lastName": "meraz",
  "email": "titino@gmail.com",
  "phone": "1232343434",
  "address": "avenida siempre viva",
  "image": "https://cdn.vox-cdn.com/thumbor/8eRpMBfVFeMnzzTz95UZQnnqqtE=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20103707/Screen_Shot_2020_07_21_at_9.38.25_AM.png",
  "company": "Umbrella"
} */
function App() {
  const [contact, setContact] = useState({});
  console.log(process.env.REACT_APP_SERVER_URL, "el server");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact, "antes de enviar");
    const data = await createContact(contact);
    console.log(data);
  };
  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} type="text" />
        <input name="lastName" onChange={handleChange} type="text" />
        <input name="email" onChange={handleChange} type="text" />
        <input name="phone" onChange={handleChange} type="text" />
        <input name="address" onChange={handleChange} type="text" />
        <input name="image" onChange={handleChange} type="text" />
        <input name="company" onChange={handleChange} type="text" />
        <Button type="submit" variant="contained">
          enviar contacto
        </Button>
      </form>
    </div>
  );
}

export default App;
