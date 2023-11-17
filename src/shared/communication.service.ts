import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private buttonClickedSource = new BehaviorSubject<boolean>(false);
  buttonClicked$ = this.buttonClickedSource.asObservable();

  setButtonClicked(value: boolean) {
    this.buttonClickedSource.next(value);
  }
}
