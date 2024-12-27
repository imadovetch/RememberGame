import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BodyComponent} from "./Component/body/body.component";
import {CommandsComponent} from "./Component/commands/commands.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- Import this

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MemoryGame';

}
