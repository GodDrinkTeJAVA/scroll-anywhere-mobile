import ScrollbarArea from "./scrollbar-area.ts";

const init = () => {
  const body = document.body;
  console.log(body)

  if (!body) {
    return;
  }

  const scrollbar = new ScrollbarArea();
  body.appendChild(scrollbar.element);
};

document.addEventListener('DOMContentLoaded', init);