import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  coolChimps = false;
  quiz = true;

  turnOnChimps() {
    this.coolChimps = !this.coolChimps;
  }

  turnOnQuiz() {
    this.quiz = !this.quiz
  }
}
