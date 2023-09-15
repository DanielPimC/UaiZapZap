import React from 'react';
import { MensagemList, InputRemetente, InputConteudo, InputButton } from './Styled-Components';

function Mensagem({ mensagens, remetente, conteudo, onChangeRemetente, onChangeMensagem, EnviarMensagem, ApertarEnter, deletarMensagem }) 
{
  return (
    <div>
      <MensagemList className="mensagem-list">
        {mensagens.map((mensagem, index) => (
          <div
            key={index}
            className={mensagem.remetente === 'eu' ? 'mensagem eu' : 'mensagem'}
            onDoubleClick={() => deletarMensagem(index)}
          >
            {mensagem.remetente !== 'eu' && (
              <div className="remetente">
                <strong>{mensagem.remetente}:</strong> {mensagem.conteudo}
              </div>
            )}
            {mensagem.remetente === 'eu' && <div className="conteudo">{mensagem.conteudo}</div>}
          </div>
        ))}
      </MensagemList>
      <div>
        <InputRemetente
          type="text"
          placeholder="Remetente"
          value={remetente}
          onChange={onChangeRemetente}
          onKeyPress={ApertarEnter}
          className="input-remetente"
        />
        <InputConteudo
          type="text"
          placeholder="Mensagem"
          value={conteudo}
          onChange={onChangeMensagem}
          onKeyPress={ApertarEnter}
          className="input-conteudo"
        />
        <InputButton className="input-button" onClick={EnviarMensagem}>Enviar</InputButton>
      </div>
    </div>
  );
}

export default Mensagem;