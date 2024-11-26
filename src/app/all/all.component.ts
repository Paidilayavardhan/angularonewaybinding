import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [NgClass,NgStyle],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {
   // String Interpolation
   title = 'One-Way Binding Example';
   description = 'This shows basic one-way binding in Angular.';
   price = 200;
   discount = 50;
 
   // Property Binding
   imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
   inputText = 'Enter text here';
   isButtonDisabled = false;
 
   // Class and Style Binding
   isHighlighted = false;
   bgColor = 'lightblue';
   textColor = 'black';
 
   

}