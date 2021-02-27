// Angular imports
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

// Library imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NgTerminalModule } from 'ng-terminal'

// Component imports
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainComponent } from './main/main.component'
import { TerminalComponent } from './components/terminal/terminal.component'
import { CodeIconsComponent } from './components/code-icons/code-icons.component'
import { HeaderComponent } from './components/layout/header/header.component';
import { TetrisComponent } from './random/tetris/tetris.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TerminalComponent,
    CodeIconsComponent,
    HeaderComponent,
    TetrisComponent,
    PortfolioComponent
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
