import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  /**
   * data sera défini dans le composant parent (ici 'app.component') 
   */
  @Input() data: string; 
  @Input() contact:string;

  constructor() { }

  ngOnInit() {
  }

}
