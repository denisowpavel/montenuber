import { Component, Inject, Injector } from '@angular/core';
import { AnnouncementService } from '@services/announcement.service';
import { ICar } from '@interfaces/car';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { FilterComponent } from '@components/filter/filter.component';
import { CarBookComponent } from '@components/car-book/car-book.component';
import { IFilter } from '@interfaces/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  list: ICar[] = [];
  filteredList: ICar[] = [];
  private readonly filterDialog = this.dialogService.open<IFilter>(
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
      this.filteredList = this.list;
    });
  }
  public showFilterDialog(): void {
    this.filterDialog.subscribe({
      next: (filter) => {
        console.log(filter);
        this.filteredList = this.list.filter((car) => {
          return (
            car.Price > filter.priceRange[0] &&
            car.Price < filter.priceRange[1] &&
            car.Location.Distance > filter.distanceRange[0] &&
            car.Location.Distance < filter.distanceRange[1]
          );
        });
      },
    });
  }

  public showCarDialog(car: ICar): void {
    this.dialogService
      .open<ICar>(new PolymorpheusComponent(CarBookComponent, this.injector), {
        data: car,
      })
      .subscribe({
        next: (data) => {
          console.log(data);
        },
      });
  }
}
