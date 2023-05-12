import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  soundPath = `../assets/sound/`

  monkeyMap: string[] = [
    this.soundPath + `monkey-1.wav`,
    this.soundPath + `monkey-2.wav`,
    this.soundPath + `monkey-3.wav`,
  ]

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
