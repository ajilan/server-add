import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servers-add';
  serverElement = [];
  serverName : '';
  serverContent : '';
  onCreateServer (){
    this.serverElement.push({
      type : 'server',
      name : this.serverName ,
      content : this.serverContent
    });
  }

    onCreateBlueprint(){
      this.serverElement.push({
        type : 'blueprint',
      name: this.serverName,
      content: this.serverContent
      });
  }
}
