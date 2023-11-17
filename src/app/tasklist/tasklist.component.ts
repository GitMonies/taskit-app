import { Component, } from '@angular/core';
import { CommunicationService } from 'src/shared/communication.service';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent {
  constructor(private communicationService: CommunicationService) {}

  onClick() {
    this.communicationService.setButtonClicked(true);
  }
}
