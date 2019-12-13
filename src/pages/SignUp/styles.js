import styled from "styled-components";
import Fundo from '../../assets/fundo.png';
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url(${Fundo});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Form = styled.form`
width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(../../assets/fundo.png);
  p {
    color: black;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: black;
    }
  }
  button {
    color: black;
    font-size: 16px;
    background: #fc6963;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: black;
    text-decoration: none;
  }
  img{
      margin-bottom: -100px;
  }
  `;