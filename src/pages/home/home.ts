import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks = [{
    name: 'Hello'
  }, {
    name: 'Toptal'
  }, {
    name: 'Blog'
  }];

  constructor(public alertCtrl: AlertController) {}

  addTask() {
    this.alertCtrl
      .create({
        title: 'Add Task',
        inputs: [
          {
            name: 'name',
            placeholder: 'Task'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Add',
            handler: ({ name }) => {
              this.tasks.push({ name });
            }
          }
        ]
      })
      .present();
  }
}
