import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserStatusComponent } from '../../components/user-status/user-status';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
