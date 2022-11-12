import { Component, Inject, Injector } from '@angular/core';
import { AnnouncementService } from '@services/announcement.service';
import { ICar } from '@interfaces/car';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { FilterComponent } from '@components/filter/filter.component';
import { CarBookComponent } from '@components/car-book/car-book.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  list: ICar[] = [];
  private readonly filterDialog = this.dialogService.open<string>(
    new PolymorpheusComponent(FilterComponent, this.injector),
    {}
  );
  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    private announcementService: AnnouncementService
  ) {}
  ngOnInit() {
    this.loadList();
  }

  private loadList(): void {
    this.announcementService.list().subscribe((list) => {
      this.list = list;
    });
  }
  public showFilterDialog(): void {
    this.filterDialog.subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }

  public showCarDialog(car: ICar): void {
    this.dialogService
      .open<ICar>(
        new PolymorpheusComponent(CarBookComponent, this.injector),
        {
          data: car,
        }
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
      });
  }
}
