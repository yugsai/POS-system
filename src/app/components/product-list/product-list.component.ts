import { Component } from '@angular/core';
import { SaleService } from 'src/services/sale.service';
import { ModalService } from 'src/services/modal.service';


interface Product {
  name: string;
  price: number;
  category?: string;
  description?: string;
  image?: string;
}

interface SelectedProduct extends Product {
  quantity: number;
}


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];
  selectedProducts: SelectedProduct[] = [];
  quantity: number = 1;
  discount: number = 0;



  constructor(private SaleService:SaleService,public modalService: ModalService){}

  ngOnInit():void{
    this.SaleService.getProducts().subscribe((data:any)=>{
      console.log('data',data);
      this.products = data;
      
    })
  }

  onSelectProduct(product: Product): void {
    const existingProduct = this.selectedProducts.find(p => p.name === product.name);
  
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.selectedProducts.push({ ...product, quantity: this.quantity });
    }
  }

  onIncreaseQuantity(product: SelectedProduct): void {
    product.quantity++;
  }

  onDecreaseQuantity(product: SelectedProduct): void {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  calculateTotal(product: SelectedProduct): number {
    return product.quantity * product.price;
  }


  getImagePath(image: string): string {
    return `assets/${image}`;
  }

  onDeleteProduct(product: SelectedProduct): void {
    const index = this.selectedProducts.indexOf(product);
    if (index !== -1) {
      this.selectedProducts.splice(index, 1);
    }
  }


  calculateSubTotal(): number {
    return this.selectedProducts.reduce((sum, product) => sum + this.calculateTotal(product), 0);
  }

  calculateVatTax(): number {
    return this.calculateSubTotal() * 0.1;
  }

  calculateTotals(): number {
    const subTotal = this.calculateSubTotal();
    const vatTax = this.calculateVatTax();
    const total = subTotal + vatTax - this.discount;
    return total >= 0 ? total : 0;
  }

  cancelSale(): void {
    // Clear the selected products and reset the discount
    this.selectedProducts = [];
    this.discount = 0;
  }



  processSale(): void {
    this.modalService.showModal();
  }


  resetData(): void {
    // Reset data to the initial state
    this.selectedProducts = [];
    this.discount = 0;


    // Hide the modal if it's open
    this.modalService.hideModal();
  }

}
