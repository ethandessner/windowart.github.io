import styled from "styled-components";
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;
export const StyledForm = styled.form`
  padding: 40px;
  width: 45%;
  ${"" /* background-color: #fff; */}
  ${"" /* border-radius: 10px; */}
  ${"" /* box-sizing: border-box; */}
  ${"" /* box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2); */}

  @media screen and (max-width: 480px) {
    padding: 20px;
    width: 90%;
  }
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${"" /* ${sharedStyles} */}
`;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  height: auto;
  min-height: 100px;
  resize: none;
  ${"" /* ${sharedStyles} */}
`;

export const StyledButton = styled.button`
  display: block;
  background-color: #4169e1;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 35px;
  padding: 0 10px;
  cursor: pointer;
  box-sizing: border-box;
  margin: 1rem;
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;
