import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from 'src/shared/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnDestroy {
  isButtonClicked = false;
  private subscription: Subscription;

  constructor(private communicationService: CommunicationService) {
    this.subscription = this.communicationService.buttonClicked$.subscribe(
      (value) => {
        this.isButtonClicked = value;
      }
    );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
