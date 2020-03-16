import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChallengeEditComponent } from './challenges/challenge-edit/challenge-edit.component';
import { CurrentChallengeComponent } from './challenges/current-challenge/current-challenge.component';
import { AuthComponent } from './auth/auth.component';
import { TodayComponent } from './challenges/today/today.component';
import { ActionBarComponent } from './shared/ui/action-bar/action-bar.component';
import { ChallengeTabsComponent } from './challenges/challenge-tabs/challenge-tabs.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ChallengeEditComponent,
        CurrentChallengeComponent,
        AuthComponent,
        TodayComponent,
        ActionBarComponent,
        ChallengeTabsComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
