// Angular imports
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

// Component imports
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainComponent } from './main/main.component'
import { TerminalComponent } from './components/terminal/terminal.component'

// Library imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NgTerminalModule } from 'ng-terminal'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TerminalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgTerminalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
