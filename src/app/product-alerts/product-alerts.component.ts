import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

//"Input" - pass data to here (child component)
//"Output" - pass data to product-list (parent component)

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
  //allow it to emit an event when the value of the notify property changes.

}
