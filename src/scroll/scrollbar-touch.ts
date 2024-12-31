export default class ScrollbarTouch {
  private scrollbarTouchElement: HTMLDivElement;
  constructor() {
    this.scrollbarTouchElement = document.createElement("div");
    this.scrollbarTouchElement.className = "scrollbar-touch";
    this.scrollbarTouchElement.addEventListener("touchstart", () => {
      this.scrollbarTouchElement.addEventListener(
        "touchmove",
        this.touchMoveHandler.bind(this)
      );
    });
    this.scrollbarTouchElement.addEventListener("touchend", () => {
      this.scrollbarTouchElement.removeEventListener(
        "touchmove",
        this.touchMoveHandler
      );
    });
  }

  private moveByPixel(newHeight: number) {
    this.scrollbarTouchElement.style.transform = `translateY(${newHeight}px)`;
    document.body.scrollTop = 900;
    console.log(document.body.scrollTop)
  }

  private touchMoveHandler(event: TouchEvent) {
    const newHeight = event.touches[0].clientY;
    this.moveByPixel(newHeight);
  }

  public move(newHeight: number) {
    this.moveByPixel(newHeight);
  }

  get element() {
    return this.scrollbarTouchElement;
  }
}
