import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiModeModule,
  TuiButtonModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import {
  TuiActionModule, TuiCarouselModule,
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

@NgModule({
  declarations: [AppComponent, LocationPipe, FilterComponent],
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
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
