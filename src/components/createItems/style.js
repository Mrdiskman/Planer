import styled from "styled-components";

export const BoxStyle = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: black;
  color: black;
  font-size: 240px;
  line-height: 260px;
  font-weight: 700;
  border-radius: 30px;
  margin-top: 20px;

  .formContainer{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
    flex-direction: column;
  }
  .sendForm{
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 30px;
    font-size: 16px;
  }
`

export const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`