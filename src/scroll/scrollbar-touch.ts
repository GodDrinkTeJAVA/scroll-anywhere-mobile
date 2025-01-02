export default class ScrollbarTouch {
  private scrollbarTouchElement: HTMLButtonElement;
  constructor() {
    this.createDOMElement();
    this.createTouchHandlers();
  }

  public move(newHeight: number) {
    console.log(newHeight)
    this.moveByPixel(newHeight);
  }

  public destroy() {
    this.scrollbarTouchElement.remove();
  }

  get element() {
    return this.scrollbarTouchElement;
  }

  private createDOMElement() {
    this.scrollbarTouchElement = document.createElement("button");
    const windowHeight = document.body.scrollHeight;
    const heightRatio = window.scrollY / window.innerHeight;
    this.scrollbarTouchElement.style.transform = `translateY(${windowHeight * heightRatio})`;
    const scrollbarHeight = Math.pow(window.screen.height, 2) / document.body.scrollHeight;
    this.scrollbarTouchElement.style.height = `${scrollbarHeight}px`;
    this.scrollbarTouchElement.className = "scrollbar-touch";
  }

  private createTouchHandlers() {
    const boundTouchMoveHandler = this.touchMoveHandler.bind(this);
    this.scrollbarTouchElement.addEventListener("touchstart", () => {
      this.scrollbarTouchElement.addEventListener(
        "touchmove",
        boundTouchMoveHandler,
      );
    });
    this.scrollbarTouchElement.addEventListener("touchend", () => {
      this.scrollbarTouchElement.removeEventListener(
        "touchmove",
        boundTouchMoveHandler,
      );
    });
  }

  private moveByPixel(newHeight: number) {
    this.scrollbarTouchElement.style.transform = `translateY(${newHeight}px)`;
  }

  private touchMoveHandler(event: TouchEvent) {
    const newHeight = event.touches[0].clientY;
    this.moveByPixel(newHeight);
    const windowHeight = document.body.scrollHeight;
    const heightRatio = newHeight / window.innerHeight;
    window.scroll({top: windowHeight * heightRatio});
  }
}
