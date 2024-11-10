import { Component, Input, OnDestroy } from '@angular/core';
import { ModalService } from 'src/services/modal.service';
import { Subscription } from 'rxjs';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-receipt-modal',
  templateUrl: './receipt-modal.component.html',
  styleUrls: ['./receipt-modal.component.css']
})
export class ReceiptModalComponent {
  @Input() receiptData: any;
  private modalSubscription: Subscription;
 
 
  constructor(private modalService: ModalService) {
    this.modalSubscription = this.modalService.modalVisible$.subscribe((isVisible) => {
      // if (!isVisible) {  
      // }
    });
  }

  ngOnDestroy(): void {
    this.modalSubscription.unsubscribe();
  }

  onClose(): void {
    window.location.reload();
  }

}
