import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KhoaComponent } from './khoa/khoa.component';
import { HienthikhoaComponent } from './khoa/hienthikhoa/hienthikhoa.component';
import { TaoSuakhoaComponent } from './khoa/tao-suakhoa/tao-suakhoa.component';
import { GiangvienComponent } from './giangvien/giangvien.component';
import { HienthigvComponent } from './giangvien/hienthigv/hienthigv.component';
import { TaoSuagvComponent } from './giangvien/tao-suagv/tao-suagv.component';
import {ShareService} from './share.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    KhoaComponent,
    HienthikhoaComponent,
    TaoSuakhoaComponent,
    GiangvienComponent,
    HienthigvComponent,
    TaoSuagvComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatSliderModule,
    BrowserAnimationsModule,
    NgbModule
    
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
