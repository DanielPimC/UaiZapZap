import React from 'react';
import './App.css';
import Mensagem from './components/Mensagem'
import { AppContainer, UaiZapTitle } from './components/Styled-Components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mensagens: [],
      remetente: '',
      conteudo: '',
    };
  }

  onChangeRemetente = (e) => {
    this.setState({ remetente: e.target.value });
  };

  onChangeMensagem = (e) => {
    this.setState({ conteudo: e.target.value });
  };

  EnviarMensagem = () => {
    let { remetente, conteudo } = this.state;

    if (remetente.trim() === '') {
      remetente = 'eu';
    } else {
      remetente = remetente.toLowerCase();
    }
  
    if (conteudo.trim() !== '') {
      const newMessage = { remetente, conteudo };
      this.setState((prevState) => ({
        mensagens: [...prevState.mensagens, newMessage],
        remetente: '',
        conteudo: '',
      }));
    }
  };
    

  ApertarEnter = (e) => {
    if (e.key === 'Enter') {
      this.EnviarMensagem();
    }
  };

  deletarMensagem = (index) => {
    const updatedMensagens = [...this.state.mensagens];
    updatedMensagens.splice(index, 1);
    this.setState({ mensagens: updatedMensagens });
  };

  render() {
    const { mensagens, remetente, conteudo } = this.state;
    return (
      <AppContainer className="App">
        <UaiZapTitle className="UaiZap">UaiZapZap</UaiZapTitle>
        <Mensagem
          mensagens={mensagens}
          remetente={remetente}
          conteudo={conteudo}
          onChangeRemetente={this.onChangeRemetente}
          onChangeMensagem={this.onChangeMensagem}
          EnviarMensagem={this.EnviarMensagem}
          ApertarEnter={this.ApertarEnter}
          deletarMensagem={this.deletarMensagem}
        />
      </AppContainer>
    );
  }
}

export default App;
