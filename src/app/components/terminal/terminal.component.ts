import { Component, AfterViewInit, ViewChild } from '@angular/core'
import { NgTerminal, FunctionsUsingCSI } from 'ng-terminal'

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements AfterViewInit {
  @ViewChild(
    'term',
    { static: true }
  ) child!: NgTerminal
  terminalText = 'Welcome to my world... >>>'

  ngAfterViewInit (): void {
    let i = 0
    const writeWelcome = setInterval(() => {
      this.child.write(this.terminalText[i])
      i++
      if (i >= this.terminalText.length) {
        clearInterval(writeWelcome)
        this.child.write('\r\n$ ')
      }
    }, 50)
    this.child.keyEventInput.subscribe(e => {
      console.log(`keyboard event: ${e.domEvent.keyCode}, ${e.key}`)

      const ev = e.domEvent
      const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey
      if (ev.keyCode === 13) {
        this.child.write('\r\n$ ')
      } else if (ev.keyCode === 8) {
        // Do not delete the prompt
        if (this.child.underlying.buffer.active.cursorX > 2) {
          this.child.write('\b \b')
        }
      } else if (printable) {
        this.child.write(e.key)
      }
    })
  }
}
