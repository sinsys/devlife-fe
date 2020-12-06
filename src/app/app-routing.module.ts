import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './main/main.component'
import { TetrisComponent } from './random/tetris/tetris.component'

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'tetris', component: TetrisComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
