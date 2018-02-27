import { Component, OnInit } from '@angular/core';

/**
 * Generated class for the ListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent implements OnInit{

  task: any[];
  title: string;

  constructor() {
    this.task = [];    
  }

  ngOnInit(): void {
    this.title = "list title";
    if(this.task.length == 0){
      this.task = [
        {
          text:'task test',
          isDone: false,
          isFocus: true
        }
      ]
    }
  }

  /**
   * GetNotDoneTask
   */
  public GetNotDoneTask(): any[]{
    return this.task.filter( item => item.isDone == false);
  }

  /**
   * GetDoneTask
   */
  public GetDoneTask(): any[] {
    return this.task.filter( item => item.isDone == true);
  }
  
  /*
  * Add item to the list
  */
  public AddItem(){
    this.task.push(
      {
        text:'',
        isDone:false,
        isFocus: true
      }
    );
  }

  /*
  * Focus out function
  */
  public focusOutFunction(item:any) {
    item.isFocus = false;
  }

  /**
   * focusInFunction
   */
  public focusInFunction(item:any) {
    item.isFocus = true;
  }
}
