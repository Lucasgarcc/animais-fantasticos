// trata eventos de click fora do elemento menu sobre Em resumo, a função outsideClick é usada para criar um comportamento que fecha o menu dropdown quando o usuário clica fora dele. Ela é uma parte importante para garantir que o menu seja fechado corretamente quando necessário.

// na linha 12: Alternativa sem setTimeout: Uma alternativa é usar o evento DOMContentLoaded para garantir que o código seja executado somente após o carregamento completo do DOM. Por exemplo: JavaScript document.addEventListener('DOMContentLoaded', () => { });

function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    element.setAttribute(outside, "");
  }
}
export default outsideClick;
