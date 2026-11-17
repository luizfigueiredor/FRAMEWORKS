// Pequenas interações da página VELORA

// Atualiza automaticamente o ano no rodapé.
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Demonstração do formulário: ainda não envia os e-mails para um servidor.
const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("emailNewsletter").value.trim();

  if (email !== "") {
    newsletterMessage.textContent = "Obrigado! O formulário está funcionando como demonstração.";
    newsletterForm.reset();
  }
});
