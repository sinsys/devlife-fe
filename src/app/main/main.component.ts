import { Component } from '@angular/core'
import { faCoffee, faCode } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  faCoffee = faCoffee
  faCode = faCode
}
