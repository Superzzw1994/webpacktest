import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appGrid]"
})
export class GridDirective {

  constructor(private element: ElementRef, private render2: Renderer2) { }

}
