import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList, Renderer2
} from "@angular/core";
import { TitleMenu } from "../../interfaces";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild("headerWrapper", { static: true }) headerWrapper: ElementRef | undefined;
  @ViewChildren("titles") titles: QueryList<ElementRef> | undefined;
  @Input()
  menus: TitleMenu[] = [];
  @Input()
  activeTab: TitleMenu = this.menus[0];
  @Output()
  tabSelected = new EventEmitter<TitleMenu>();

  onTabClick = (menu: TitleMenu): void => {
    this.tabSelected.emit(menu);
  };

  trackTitles = (index: number, item: TitleMenu): string | number => {
    return item ? item.title : index;
  };

  constructor(private render2: Renderer2) { }

  ngOnInit(): void {
    // console.log(this.headerWrapper, "headerWrapper");
    // console.log(this.images, "images");
  }
  ngAfterViewInit(): void {
    this.titles?.forEach((title: ElementRef) => {
      this.render2.setStyle(title.nativeElement, "font-size", '14px');
    });
  }
}
