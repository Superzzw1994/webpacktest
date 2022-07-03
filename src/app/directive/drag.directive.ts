import { Directive, ElementRef, HostListener, Renderer2, Input } from "@angular/core";

@Directive({
  selector: "[app-drag],[draggedClass]"
})
export class DragDirective {
  private draggableFlag = false;

  @Input("app-drag")
  set Draggable(val: boolean) {
    this.draggableFlag = val;
    this.renderer2.setAttribute(this.elementRef.nativeElement, "draggable", `${val}`);
  }

  get isDraggable() {
    return this.draggableFlag;
  }

  @Input() draggedClass: string = "dragged";

  constructor(private renderer2: Renderer2, private elementRef: ElementRef) { }

  @HostListener("dragstart", ["$event"])
  onDragStart(event: Event) {
    if (event.target === this.elementRef.nativeElement) {
      this.renderer2.addClass(this.elementRef.nativeElement, this.draggedClass);
    }
  }

  @HostListener("dragEnd", ["$event"])
  onDragEnd(event: Event) {
    if (event.target === this.elementRef.nativeElement) {
      this.renderer2.addClass(this.elementRef.nativeElement, this.draggedClass);
    }
  }

}
