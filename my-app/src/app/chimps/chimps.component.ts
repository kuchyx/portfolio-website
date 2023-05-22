import { Component } from '@angular/core';

@Component({
  selector: 'app-chimps',
  templateUrl: './chimps.component.html',
  styleUrls: ['./chimps.component.scss']
})
export class ChimpsComponent {

  soundPath = `../assets/sound/`

  monkeyMap: string[] = [
    this.soundPath + `monkey-1.wav`,
    this.soundPath + `monkey-2.wav`,
    this.soundPath + `monkey-3.wav`,
  ]

  coolChimps = false;

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  chimpNoise() {
    const monkeyNumber = this.getRandomInt(3);
    let audio = new Audio();
    audio.src = this.monkeyMap[monkeyNumber];
    console.log(audio.src);
    audio.load();
    audio.play();
  }
}
