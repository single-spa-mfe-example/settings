import { Component } from '@angular/core';

@Component({
  selector: 'app-main-settings',
  templateUrl: './main-settings.component.html',
  styleUrls: ['./main-settings.component.scss'],
})
export class MainSettingsComponent {
  settings = ['Name: Example Test', 'Favorite web framework: Not Angular'];
}
