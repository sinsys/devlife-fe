import { Component } from '@angular/core'
import {
  faCoffee,
  faCode
} from '@fortawesome/free-solid-svg-icons'
import {
  faAngular,
  faReact,
  faNodeJs,
  faAws,
  faGithub,
  faJsSquare,
  faLinux,
  faNpm,
  faSlack,
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  faCoffee = faCoffee
  faCode = faCode
  faAngular = faAngular
  faReact = faReact
  faNodeJs = faNodeJs
  faAws = faAws
  faGithub = faGithub
  faJsSquare = faJsSquare
  faLinux = faLinux
  faNpm = faNpm
  faSlack = faSlack
  faStackOverflow = faStackOverflow
}
