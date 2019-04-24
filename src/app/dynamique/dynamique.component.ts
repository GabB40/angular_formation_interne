import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamique',
  templateUrl: './dynamique.component.html',
  styleUrls: ['./dynamique.component.css']
})
export class DynamiqueComponent implements OnInit {

  /**
   * Définition d'attributs dans la classe du composant
   */
  titre:string= "L'interpollation";
  pseudo:string = "Terminator";
  matricule: number = 10000;

  isRequired: boolean = true;

  buttonStatus: string = "Bouton non cliqué";

  inputValue: string = "Pas de modification";

  attTWBinding = "Magique!";

  constructor() { }

  ngOnInit() {
  }

  /**
   * Méthode très simple qui retourne true
   */
  disable(){
    return true;
  }

  /**
   * Déclaration de deux méthodes 
   * pour démo fonctionnement EVENT BINDING
   */
  onClickButton(){
    this.buttonStatus = "Le bouton a été cliqué!"
  }
  onChangeInput(){
    this.inputValue = "Modification apportée";
  }
}
