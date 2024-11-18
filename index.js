document.querySelector('.olhoAberto').addEventListener('click', () => {
  const olhoAberto = document.querySelector('.olhoAberto');
  const olhoFechado = document.querySelector('.olhoFechado');
  olhoFechado.style.display = 'block';
  olhoAberto.style.display = 'none';
  const input = document.querySelector('.inputSenha');
  input.type = 'text';
  document.querySelector('.olhoFechado').addEventListener('click', () => {
    const olhoFechado = document.querySelector('.olhoFechado');
    olhoFechado.style.display = 'none';
    olhoAberto.style.display = 'block';
    input.type = 'password';
  });
});

const senha = 'farmasearch2024'
localStorage.clear()

document.querySelector('.btnMostrar').addEventListener('click', () => {
  const valorInput = document.querySelector('.inputSenha').value;
  if(valorInput === senha) {
    let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
    localStorage.setItem('token', token) // O localStorage só aceita String
    window.location.href = 'index-adm.html'
  } else {
    const mensagemSenhaIncorreta = document.querySelector('.mensagemSenhaIncorreta');
    mensagemSenhaIncorreta.style.display = 'block';
    const divContainerSenha = document.querySelector('.containerSenha');
    divContainerSenha.classList.add('senhaIncorreta');
  };
});

document.querySelector('.inputSenha').addEventListener('keyup', (event) => {
  if(event.key === 'Enter') {
    const valorInput = document.querySelector('.inputSenha').value;
      if(valorInput === senha) {
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token) // O localStorage só aceita String
        window.location.href = 'index-adm.html'
      } else {
        const mensagemSenhaIncorreta = document.querySelector('.mensagemSenhaIncorreta');
        mensagemSenhaIncorreta.style.display = 'block';
        const divContainerSenha = document.querySelector('.containerSenha');
        divContainerSenha.classList.add('senhaIncorreta');
      };
  };
  
});
      