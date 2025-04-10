const messages = [
  "Kamu itu spesial, lebih dari kata-kata yang bisa jelasin.",
  "Hadirnya kamu bikin hariku selalu cerah.",
  "Kalau kamu tanya aku sayang siapa? Ya kamu jawabannya!",
  "Senyummu itu candu, bikin pengen lihat terus.",
  "Terima kasih udah jadi bagian dari hidupku."
];

let index = 0;

function nextMessage() {
  const messageBox = document.getElementById("message");
  messageBox.style.opacity = 0;
  setTimeout(() => {
    messageBox.innerText = messages[index];
    messageBox.style.opacity = 1;
    index = (index + 1) % messages.length;
  }, 300);
}