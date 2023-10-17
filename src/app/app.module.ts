import { AppComponent } from './app.component';

// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { MovieModule } from './movie/movie.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

=======
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieApiService } from './shared/service/movie-api.service';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 3e1ccc5cf43a7464dbc4084194ca8077cba530d8


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MovieModule,
<<<<<<< HEAD
    NgbModule
=======
    FontAwesomeModule,
    HttpClientModule
>>>>>>> 3e1ccc5cf43a7464dbc4084194ca8077cba530d8
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
