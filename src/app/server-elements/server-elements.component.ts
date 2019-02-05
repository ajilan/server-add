import { Component, OnInit , Input, ViewEncapsulation,  OnChanges, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css'],
  encapsulation: ViewEncapsulation.Emulated //native, none, shadowDOM;
})
export class ServerElementsComponent implements OnInit, OnChanges {
 @Input('srvElement') element : {type: string , name: string, content: string};
@Input () name: string;

constructor() {
  console.log('constructor working!');
 }

  ngOnInit() {
    console.log('ngOnInit working');
  }
ngOnChanges(changes: SimpleChanges){
console.log('ngOnChange called before ngOnInit');
console.log(changes);
}
ngDocheck() {
  console.log('ngDoCheck called!')
  }
  
}
