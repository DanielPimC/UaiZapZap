import React from 'react';

function Mensagem({
  mensagens,
  remetente,
  conteudo,
  onChangeRemetente,
  onChangeMensagem,
  EnviarMensagem,
  ApertarEnter,
  deletarMensagem,
}) {
  return (
    <div>
      <div className="mensagem-list">
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
      </div>
      <div>
        <input
          type="text"
          placeholder="Remetente"
          value={remetente}
          onChange={onChangeRemetente}
          onKeyPress={ApertarEnter}
          className="input-remetente"
        />
        <input
          type="text"
          placeholder="Mensagem"
          value={conteudo}
          onChange={onChangeMensagem}
          onKeyPress={ApertarEnter}
          className="input-conteudo"
        />
        <button className="input-button" onClick={EnviarMensagem}>Enviar</button>
      </div>
    </div>
  );
}

export default Mensagem;