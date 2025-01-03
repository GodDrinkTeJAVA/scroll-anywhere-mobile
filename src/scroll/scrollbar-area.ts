import ScrollbarTouch from "./scrollbar-touch.ts";

export default class ScrollbarArea {
  private scrollbarAreaElement: HTMLDivElement;
  private scrollbarTouch: ScrollbarTouch | undefined;

  constructor() {
    this.scrollbarAreaElement = document.createElement("div");
    this.scrollbarAreaElement.className = "scrollbar-area";
    const boundHandleScroll = this.handleScroll.bind(this);
    const boundHandleScrollEnd = this.handleScrollEnd.bind(this);
    document.addEventListener("scroll", boundHandleScroll);
    document.addEventListener('scrollend', boundHandleScrollEnd);
  }

  get element() {
    return this.scrollbarAreaElement;
  }

  private handleScroll() {
    if (this.scrollbarTouch) {
        const newHeight = window.innerHeight * (window.scrollY / document.body.scrollHeight);
        this.scrollbarTouch.move(newHeight)
        return;
    }
    this.scrollbarTouch = new ScrollbarTouch();
    this.scrollbarAreaElement.appendChild(this.scrollbarTouch.element);
  }

  private handleScrollEnd() {
    setTimeout(() => {
      if (!this.scrollbarTouch || !this.scrollbarTouch.canDeleteTouchArea()) {
        return;
      }
      this.scrollbarTouch.destroy();
      this.scrollbarTouch = undefined;
    }, 3000);
  }
}
