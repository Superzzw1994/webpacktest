import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  visible = false;

  constructor() { }

  toggleModalVisible() {
    this.visible = !this.visible;
  }
}
