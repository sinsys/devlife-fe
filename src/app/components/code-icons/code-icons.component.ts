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
  selector: 'app-code-icons',
  templateUrl: './code-icons.component.html',
  styleUrls: ['./code-icons.component.scss']
})
export class CodeIconsComponent {
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
