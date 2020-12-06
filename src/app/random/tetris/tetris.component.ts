import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls: ['./tetris.component.scss']
})

export class TetrisComponent implements OnInit {
  prevPiece: string = ''
  currentPiece: string = ''
  nextPiece: string = ''

  pieceList: string[] = []
  pieceHistory: string[] = []
  pieceMap = [
    'I',
    'J',
    'L',
    'S',
    'Square',
    'T',
    'Z'
  ]

  baseStr = 'assets/images/random/tetris/'
  suffix = 'Block.png'

  ngOnInit (): void {
    this.getPieces()
  }

  getPieces (): void {
    const pieces = this.shuffleArray(this.pieceMap)
    this.pieceList = [...this.pieceList, ...pieces]
    this.setPiecePaths()
  }

  getNextPiece (): void {
    if (this.pieceList.length < 3) {
      this.getPieces()
    }
    this.pieceHistory.push(this.pieceList.shift() as string)
    this.setPiecePaths()
    console.log(this.pieceHistory)
  }

  shuffleArray (map: string[]): string[] {
    const tempPieces = map
    for (let i = map.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempPieces[i], tempPieces[j]] = [tempPieces[j], tempPieces[i]]
    }
    return tempPieces
  }

  setPiecePaths (): void {
    const prevPiece = this.pieceHistory[this.pieceHistory.length - 1]
    const currentPiece = this.pieceList[0]
    const nextPiece = this.pieceList[1]

    this.prevPiece = prevPiece != null
      ? `${this.baseStr}${prevPiece}${this.suffix}`
      : ''
    this.currentPiece = `${this.baseStr}${currentPiece}${this.suffix}`
    this.nextPiece = `${this.baseStr}${nextPiece}${this.suffix}`
  }
}
