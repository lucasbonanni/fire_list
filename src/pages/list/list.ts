import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthGuard } from '../../app/auth/auth-guard.service';
import { ConsoleMessagesProvider } from '../../providers/console-messages/console-messages';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public authGuard:AuthGuard,
  public messageService: ConsoleMessagesProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  public ionViewCanEnter() {
    // var status = this.authGuard.checkLogin();
    // this.messageService.consoleInfo("isloged",status,this);
    // return status;
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
