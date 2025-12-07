import { emitirTextoEditor } from "./socket-front-documento";

const textoEditor = document.getElementById('editor-texto');

textoEditor.addEventListener('keyup', () => {
    emitirTextoEditor(textoEditor.value);
});

function atualizaTextoEditor(texto) {
    textoEditor = texto;
}

export {atualizaTextoEditor};