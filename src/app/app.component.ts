import { Component } from '@angular/core';
import {AnnouncementService} from "@services/announcement.service";
import {ICar} from "@interfaces/car";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list: ICar[] = [];
  constructor(private announcementService: AnnouncementService) {
  }
  ngOnInit() {
    this.loadList();
  }

  private loadList(): void {
    this.announcementService.list().subscribe((list) => {
      this.list = list;
    });
  }
}
