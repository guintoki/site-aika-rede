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
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      color: #ffffff;
      padding: 13px 30px;
      background: -webkit-gradient(
        linear, left top, left bottom,
        from(#05a9f5),
        color-stop(0.50, #3b3b3b),
        color-stop(0.50, #242424),
        to(#59947c));
      background: linear-gradient(
        top,
        #05a9f5 0%,
        #3b3b3b 50%,
        #242424 50%,
        #59947c);
      border-radius: 17px;
      border: 1px solid #00acfc;
      box-shadow:
        0px 1px 3px rgba(0,200,250,0.5),
        inset 0px 0px 0px rgba(237,0,237,0);
      text-shadow:
        0px -1px 0px rgba(000,000,000,1),
        0px 1px 0px rgba(255,255,255,0.2);    
  }
  button:hover{
    background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #468ccf), color-stop(1, #63b8ee) );
	background:-moz-linear-gradient( center top, #468ccf 5%, #63b8ee 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#468ccf', endColorstr='#63b8ee');
	background-color:#468ccf;
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