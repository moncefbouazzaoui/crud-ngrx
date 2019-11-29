import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.scss']
})
export class PageoneComponent implements OnInit {
  usernameForm: FormGroup;
  isLoading = false;
  user: any;
  notFound = false;

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    this.setUsernameForm();
  }

  // construction du formulaire
  setUsernameForm() {
    this.usernameForm = new FormGroup({
      username: new FormControl('', [Validators.required])
    });
  }

  // recupère l'utilisateur depuis l'api
  getUserByUsername() {
    this.isLoading = true;
    this.notFound = false;
    const username = this.usernameForm.value.username;
    this._sharedService.getProfileByUsername(username)
      .subscribe(
        response => this.handleResponse(response),
        (errorResponse) => this.handleError(errorResponse.error),
        () => this.isLoading = false
      );
  }

  openProfile(url) {
    this.openUrl(url, '_blank');
  }

  sendEmail(email) {
    this.openUrl(email, 'mail');
  }

  // ouvre une nouvel onglet pour voir le profil sur github ou envoyer un email
  openUrl(url, type) {
    const win = window.open(url, type);
    win.focus();
  }

  // gère le retour d'api n cas de succès
  handleResponse(response) {
    this.user = response;
  }

  // gère le retour d'api en cas d'erreur
  handleError(error) {
    this.isLoading = false;
    this.notFound = (error.hasOwnProperty('message') && error.message === 'Not Found'); console.log(this.notFound )
  }

}
