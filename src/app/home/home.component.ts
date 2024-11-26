
import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass,NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
 // String Interpolation
 title = 'One-Way Binding Example';
 description = 'This shows basic one-way binding in Angular.';
 price = 200;
 discount = 50;

 
}