import './greet-hello.css';
import ImageAvatar from './assets/img_avatar.png'

export const greetHello = () => {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = ImageAvatar;
  img.alt = "Profile Photo";
  img.classList.add("image-style");

  const container = document.createElement("div");
  container.classList.add("container");

  const h4 = document.createElement("h4");
  h4.textContent = "Hi Hello Vinu";
  h4.classList.add("greet-text");
  container.appendChild(img);
  container.appendChild(h4);

  card.appendChild(container);
  document.body.appendChild(card);
};
