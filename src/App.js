import React, { useState } from "react";
import styled from "styled-components";

import { app } from "./config";
import { ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { imageDb } from "./config";
import { v4 } from "uuid";

import "./App.css";

import {
  FormContainer,
  FormWrapper,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
  StyledError,
} from "./formElements";

const Container = styled.div`
  justify-content: center;
  align-items: center;
  margin: 20%;
`;

const initialState = {
  name: "",
  message: "",
};
const db = getFirestore(app);

function App() {
  // THIS IS FOR THE IMAGE UPLOAD
  const [img, setImg] = useState();

  const handleClick = () => {
    const imageRef = ref(imageDb, `files/${v4()}`);
    uploadBytes(imageRef, img);
  };
  // THIS IS SENDING A MESSAGE
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");
  const userCollectionRef = collection(db, "contactdata");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
    console.log(state);
    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }
    setError("");
    console.log("Succeeded!");
    addDoc(userCollectionRef, {
      name: state.name,
      message: state.message,
    }).then(() => {
      if (!alert("Form submitted successfully! Goodbye now!"))
        document.location = "https://www.youtube.com/watch?v=ruSjI7r1sO0";
    });
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <div className="App">
      <Container>
        <p>
          Hi there! My name is Ethan and I am an aspiring artist. I love to draw
          but I have a hard time coming up with ideas. If you are here, feel
          free to upload an image for me to practice and I'll post it right
          here! Submit your name an optional message too!
        </p>

        <FormContainer>
          <FormWrapper>
            <StyledForm onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <StyledInput
                type="text"
                name="name"
                value={state.name}
                onChange={handleInput}
                required
              />

              <label htmlFor="message">Message</label>
              <StyledTextArea
                name="message"
                value={state.message}
                onChange={handleInput}
              />
              {error && (
                <StyledError>
                  <p>{error}</p>
                </StyledError>
              )}
              <input
                type="file"
                onChange={(e) => setImg(e.target.files[0])}
                required
              />
              <StyledButton type="submit" onClick={handleClick}>
                Send Message and Upload an Image!
              </StyledButton>
            </StyledForm>
          </FormWrapper>
        </FormContainer>
        {/* <button onClick={handleClick}>Upload</button> */}
      </Container>
    </div>
  );
}

export default App;
