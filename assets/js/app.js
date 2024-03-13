// Selecionar elementos HTML
const textoOriginalElement = document.getElementById('textoOriginal');
const textoCriptografadoElement = document.getElementById('textoCriptografado');
const mensagemElement = document.getElementById('mensagem');
const btnCopiarElement = document.getElementById('btnCopiar');

// Função para criptografar o texto
function criptografar() {
  const textoOriginal = getTextoOriginal();
  const textoCriptografado = cifraDeCesar(textoOriginal, 3);
  atualizarTextoCriptografado(textoCriptografado);
}

// Função para descriptografar o texto
function descriptografar() {
  const textoCriptografado = textoCriptografadoElement.textContent;
  const textoDescriptografado = cifraDeCesar(textoCriptografado, -3);
  setTextoOriginal(textoDescriptografado);
}

// Função para copiar o texto criptografado
function copiarTexto() {
  const textoCriptografado = textoCriptografadoElement.textContent;
  navigator.clipboard.writeText(textoCriptografado)
      .then(() => alert('Texto copiado com sucesso!'))
      .catch(err => console.error('Erro ao copiar texto:', err));
}

// Função para obter o texto do elemento de entrada
function getTextoOriginal() {
  return textoOriginalElement.value.toUpperCase();
}

// Função para atualizar o texto criptografado na página
function atualizarTextoCriptografado(texto) {
  if (texto) {
    textoCriptografadoElement.textContent = texto;
    ocultarMensagem();
    mostrarBotaoCopiar();
  } else {
    mostrarMensagem('Digite um texto que você deseja criptografar ou descriptografar.');
    ocultarBotaoCopiar();
  }
}

// Função para definir o texto descriptografado no textarea
function setTextoOriginal(texto) {
  textoOriginalElement.value = texto;
}

// Função para ocultar a mensagem de aviso
function ocultarMensagem() {
  mensagemElement.style.display = 'none';
}

// Função para mostrar uma mensagem de aviso
function mostrarMensagem(mensagem) {
  mensagemElement.textContent = mensagem;
  mensagemElement.style.display = 'block';
}

// Função para mostrar o botão de copiar
function mostrarBotaoCopiar() {
  btnCopiarElement.style.display = 'inline-block';
}

// Função para ocultar o botão de copiar
function ocultarBotaoCopiar() {
  btnCopiarElement.style.display = 'none';
}

// Função para cifra de César
function cifraDeCesar(texto, deslocamento) {
  let textoCriptografado = '';
  for (let i = 0; i < texto.length; i++) {
    let charCode = texto.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + deslocamento) % 26 + 26) % 26 + 65;
    }
    textoCriptografado += String.fromCharCode(charCode);
  }
  return textoCriptografado;
}
