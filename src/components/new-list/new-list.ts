import { Component, HostListener } from '@angular/core';

/**
 * Generated class for the NewListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'new-list',
  templateUrl: 'new-list.html'
})
export class NewListComponent {

  text: string;
  wasClicked: boolean;

  constructor() {
    console.log('Hello NewListComponent Component');
    this.text = 'Hello World';
    this.wasClicked = false;
  }


  @HostListener('click', ['$event']) 
    onClick (event : MouseEvent) : void {
      this.wasClicked = true;
        console.log('new element click',this.wasClicked)
        
    }
}
