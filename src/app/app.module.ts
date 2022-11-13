import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiModeModule,
  TuiButtonModule,
  TuiSvgModule, TuiErrorModule, TuiTextfieldControllerModule, TuiLoaderModule,
} from '@taiga-ui/core';
import {
  TuiActionModule, TuiCarouselModule, TuiFieldErrorPipeModule, TuiInputDateRangeModule,
  TuiInputModule,
  TuiMarkerIconModule, TuiPaginationModule,
  TuiToggleModule,
} from '@taiga-ui/kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LocationPipe } from './pipes/location.pipe';
import { FilterComponent } from './components/filter/filter.component';
import { CarViewComponent } from './components/car-view/car-view.component';
import { CarBookComponent } from './components/car-book/car-book.component';
import {TuiInputCardGroupedModule, TuiMoneyModule} from "@taiga-ui/addon-commerce";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, LocationPipe, FilterComponent, CarViewComponent, CarBookComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiModeModule,
    TuiActionModule,
    TuiButtonModule,
    TuiInputModule,
    TuiToggleModule,
    TuiMarkerIconModule,
    TuiSvgModule,
    TuiCarouselModule,
    TuiPaginationModule,
    TuiFieldErrorPipeModule,
    TuiInputCardGroupedModule,
    ReactiveFormsModule,
    TuiErrorModule,
    TuiInputDateRangeModule,
    TuiTextfieldControllerModule,
    TuiMoneyModule,
    TuiLoaderModule,
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
