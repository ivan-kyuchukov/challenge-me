import { Component, EventEmitter, Output } from '@angular/core';
import { ActionBarComponent } from '../../shared/ui/action-bar/action-bar.component';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css'],
  moduleId: module.id
})
export class ChallengeEditComponent {
    // @Output() input = new EventEmitter<string>();
    // challengeDescription = '';

    // onSetChallenge() {
    //     if (this.challengeDescription != '') {
    //         this.input.emit(this.challengeDescription);
    //         this.challengeDescription = '';
    //     }
    // }
}
