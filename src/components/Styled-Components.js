import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-family: Trebuchet MS;
`;

export const MensagemList = styled.div`
  margin: 10px auto;
  width: 100%;
  max-width: 400px;
  height: 500px;
  max-height: 100%;
  background-color: #5d6368;
  border: 3px solid rgb(44, 44, 44);
  border-radius: 10px;
  text-align: center;
  overflow: auto;
`;

export const UaiZapTitle = styled.h2`
  margin: 0px auto;
  font-family: Arial;
`;

export const InputRemetente = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  width: 85px;
`;

export const InputConteudo = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
`;

export const InputButton = styled.button`
  background-color: rgb(44, 44, 44);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;