import React, { Component } from 'react';
import './App.css';
import Mensagem from './components/mensagem';

class App extends Component {
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
    const { remetente, conteudo } = this.state;
    if (remetente.trim() !== '' && conteudo.trim() !== '') {
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
      <div className="App">
        <h2 className="UaiZap">UaiZap</h2>
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
      </div>
    );
  }
}

export default App;