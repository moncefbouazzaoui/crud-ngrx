import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.scss']
})
export class PagetwoComponent implements OnInit {
  urlForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.setUrlForm();
  }

  setUrlForm() {
    this.urlForm = new FormGroup({
      url: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$'),
      ])
    });
  }

  // Copie l'url dans l'input
  copyUrl() {
    const textBox = document.getElementById("url-shortener") as HTMLInputElement;
    textBox.select();
    document.execCommand("copy");
  }

}
