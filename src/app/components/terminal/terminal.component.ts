import { Component, AfterViewInit, ViewChild } from '@angular/core'
import { NgTerminal } from 'ng-terminal'

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

  terminalText = [
    '$ My name is Nicholas Hazel',
    'I breathe code... and drink coffee',
    'Welcome to my world... >>>'
  ]

  writeRows (rows: string[], row = 0): any {
    if (row >= rows.length) {
      return true
    }
    // Write a row
    const line = rows[row]
    let i = 0
    const timeout = window.setInterval(() => {
      this.child.write(line[i])
      i++
      if (i >= line.length) {
        clearInterval(timeout)
        this.child.write('\r\n$ ')
        row++
        return this.writeRows(rows, row)
      }
    }, 50)
  }

  ngAfterViewInit (): void {
    this.writeRows(this.terminalText)

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
