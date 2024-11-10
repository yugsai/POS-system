import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalVisible = new BehaviorSubject<boolean>(false);
  modalVisible$ = this.modalVisible.asObservable();

  showModal(): void {
    this.modalVisible.next(true);
  }

  hideModal(): void {
    this.modalVisible.next(false);
  }
}
