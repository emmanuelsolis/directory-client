import { useState, useEffect } from "react";
import { Navbar } from "./Components";
import { Button, IconButton, Stack } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { createContact } from "./services/contacts";

function App() {
  const [contact, setContact] = useState({});
  const [image, setImage] = useState(  );
  const [preview, setPreview] = useState()
  const [fake, setFake] = useState('data:image/png;base64,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');


  useEffect(() => {
    //vamos a darle una validación 
    if(!image){
      setPreview(undefined)
      return 
    }
    //!Este objeto de abajo se convierte en la imagen, se crea una liga que si funciona
    const objectUrl = URL.createObjectURL(image)
    setPreview(objectUrl)
    // cuando se desmonta libera la memoria
    return () => URL.revokeObjectURL(objectUrl)
  }, [image])
  // console.log(process.env.REACT_APP_SERVER_URL, "el server");
  //!Submit para el Backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setContact({...contact, image: e.target.value});
    console.log(contact, "antes de enviar");
    // const data = await createContact(contact);
    // console.log(data);
  };
  //!Cambios para el form
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  //!Cambios para la imagen
  const handleChangeImage = (e) => {
    console.log(e.target.files[0])
    if(!e.target.files[0] ||  e.target.files.length === 0) {
      setImage(undefined)
      return
    }
    setImage(e.target.files[0]);
  };
  return (
    <div>
      <Navbar />
      <Stack>
        <form onSubmit={handleSubmit}>
          <input name="name" onChange={handleChange} type="text"placeholder="Name" />
          <input name="lastName" onChange={handleChange} type="text" placeholder="Last Name" />
          <input name="email" onChange={handleChange} type="text" placeholder="Email" />
          <input name="phone" onChange={handleChange} type="text" placeholder="Phone Number"/>
          <input name="address" onChange={handleChange} type="text" placeholder="Address"/>
          <input name="company" onChange={handleChange} type="text" placeholder="Company"/>
          <Button  variant="contained" component="label">
            Upload
            <input 
            hidden 
            onChange={handleChangeImage}  
            accept="image/*" 
            multiple 
            type="file" 
            />
          </Button>
          <IconButton />
          <Button type="submit" variant="contained">
            enviar contacto
          </Button>
        </form>
          {typeof preview === "string"
          ?  ( <div><img src={preview} width="300" height="300" style={{borderRadius:'50%'}} alt="random preview" /></div> )
          :  ( <div><img src={fake} style={{ width: '300px', height: '300px', borderRadius: '50%'}} alt="avatar my lab" /></div>)
          }
      </Stack>
    </div>
  );
}

export default App;
