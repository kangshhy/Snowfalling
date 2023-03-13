
const MinDuration = 10;
const body = document.querySelector("body");

function makeSnow() {
  const snowflake = document.createElement("div");
  const delay = Math.random() * 10;
  const initialOpacity = Math.random();
  const duration = Math.random() * 20 + MinDuration;

  snowflake.classList.add("snowflake");
  snowflake.style.left = `${Math.random()*window.screen.width}px`;
  snowflake.style.opacity = initialOpacity;
  snowflake.style.animation = `fall ${duration}s linear`
  snowflake.style.animationDelay = `${delay}s`;

  body.appendChild(snowflake);

  setTimeout(() => {
    body.removeChild(snowflake);
    makeSnow()
  }, (duration + delay) * 1000);
}


makeSnow();
for (let i = 0; i < 50; i++) {
  setTimeout(makeSnow, 500 * i)
}