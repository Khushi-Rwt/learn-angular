import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DatePipe, SlicePipe, JsonPipe, DecimalPipe, CurrencyPipe, TitleCasePipe } from '@angular/common';

@Component({
    selector: 'app-pipes',
    imports: [UpperCasePipe, LowerCasePipe, DatePipe, SlicePipe, JsonPipe, DecimalPipe, CurrencyPipe, TitleCasePipe],
    templateUrl: './pipes.component.html',
    styleUrl: './pipes.component.css'
})
export class PipesComponent {
  title = "Basic Pipes";
  today = Date();
  user=[
    {name:"Khushi", age:"22", city:"Delhi"}
  ]
  word = "hello world";
  capitalizedWord = this.word.charAt(0).toUpperCase() + this.word.slice(1);
} 