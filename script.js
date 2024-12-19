// Seleciona o elemento raiz do documento HTML (<html>) e o armazena na variável 'pos'
let pos = document.documentElement;

// Adiciona um ouvinte de evento para o movimento do mouse
// O evento "mousemove" será acionado sempre que o mouse se mover
pos.addEventListener("mousemove", (e) => {
  
  // Atualiza a variável CSS '--1' com a posição horizontal (eixo X) do mouse
  // A posição 'e.clientX' é dada em pixels e é a distância do mouse à borda esquerda da janela
  pos.style.setProperty("--1", e.clientX + "px");

  // Atualiza a variável CSS '--2' com a posição vertical (eixo Y) do mouse
  // A posição 'e.clientY' é dada em pixels e é a distância do mouse à borda superior da janela
  pos.style.setProperty("--2", e.clientY + "px");
});
