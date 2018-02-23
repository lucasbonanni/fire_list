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
          isDone: false
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
  
  public AddItem(){
    this.task.push(
      {
        text:'',
        isDone:false
      }
    );
    console.log("additem",this.task);
  }

}
