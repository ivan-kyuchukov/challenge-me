import { Component } from "@angular/core";
import { ChallengeEditComponent } from "./challenges/challenge-edit/challenge-edit.component";
import { CurrentChallengeComponent } from "./challenges/current-challenge/current-challenge.component";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    activeChallenges: string[] = [];

    onChallengeInput(challengeDescription: string) {
        this.activeChallenges.push(challengeDescription);
    }
 }
