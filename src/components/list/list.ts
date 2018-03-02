import { Component, OnInit, Input } from '@angular/core';
import { List } from '../../app/shared/list.entity';

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
  /**
   * List element
   */
  @Input() list:List;

  constructor() {
    if(this.list == undefined || this.list == null)
      this.list = new List();
    this.list.items = [];    
  }

  ngOnInit(): void {
    this.list.title = "list title";
    if(this.list.items.length == 0){
      this.list.items = [
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
    return this.list.items.filter( item => item.isDone == false);
  }

  /**
   * GetDoneTask
   */
  public GetDoneTask(): any[] {
    return this.list.items.filter( item => item.isDone == true);
  }
  
  /*
  * Add item to the list
  */
  public AddItem(){
    this.list.items.push(
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
