import { Injectable, ViewContainerRef } from "@angular/core";
import { NzModalService } from "ng-zorro-antd/modal";

@Injectable({
  providedIn: "root"
})
export class AppService {

  constructor(private modal: NzModalService) { }

  createModal(string ?: string, viewContainerRef ?: ViewContainerRef) {
    this.modal.create({
      nzTitle: "3123",
      nzContent: "3123132",
      nzViewContainerRef: viewContainerRef
    });
  }
}
