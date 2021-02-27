import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './main/main.component'
import { TetrisComponent } from './random/tetris/tetris.component'
import { PortfolioComponent } from './pages/portfolio/portfolio.component'

const routes: Routes = [
  { path: 'asd', component: MainComponent },
  { path: '', component: PortfolioComponent },
  { path: 'tetris', component: TetrisComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
