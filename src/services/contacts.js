import axios from "axios";

function successStatus(response) {
  return {
    status: true,
    data: response.data,
  };
}

function internalServerError(error) {
  if (
    error.response &&
    error.response.data &&
    error.response.data.errorMessage
  ) {
    return {
      status: false,
      errorMessage: error.response.data.errorMessage,
    };
  }
  return {
    status: false,
    errorMessage: "Internal Server Error, check your server",
  };
}
const contactService = axios.create({
  baseURL: `https://iron-contacts.herokuapp.com/api/contact`,
});

export const createContact = (data) => {
  console.log(data, "el user");
  return contactService
    .post("/create-contact", data)
    .then(successStatus)
    .catch(internalServerError);
};
