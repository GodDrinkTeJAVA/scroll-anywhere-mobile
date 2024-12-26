export default class ScrollbarTouch {
  private scrollbarTouchElement: HTMLDivElement;
  constructor() {
    this.scrollbarTouchElement = document.createElement("div");
    this.scrollbarTouchElement.addEventListener("touchstart", () => {
      this.scrollbarTouchElement.addEventListener(
        "touchmove",
        this.touchMoveHandler
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
  }

  private touchMoveHandler(event: TouchEvent) {
    const newHeight = event.touches[0].clientY;
    this.moveByPixel(newHeight);
  }

  public move(newHeight: number) {
    this.moveByPixel(newHeight);
  }
}
