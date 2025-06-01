document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('toggle-tema');

  if (botao) {
    botao.addEventListener('click', () => {
      document.body.classList.toggle('tema-claro');
      console.log('Botão clicado!'); // teste visual
    });
  } else {
    console.log('Botão não encontrado!');
  }
});
