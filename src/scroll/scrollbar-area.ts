import ScrollbarTouch from "./scrollbar-touch.ts";

export default class ScrollbarArea {
  private scrollbarAreaElement: HTMLDivElement;
  private scrollbarTouch: ScrollbarTouch;
  constructor() {
    this.scrollbarTouch = new ScrollbarTouch();
    this.scrollbarAreaElement = document.createElement("div");
    this.scrollbarAreaElement.className = "scrollbar-area";

    this.scrollbarAreaElement.appendChild(this.scrollbarTouch.element);
  }

  get element() {
    return this.scrollbarAreaElement;
  }
}
