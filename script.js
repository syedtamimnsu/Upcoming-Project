
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  const mailto = `mailto:syedtamim167@gmail.com?subject=AI Judicial Project&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
  window.location.href = mailto;
});
