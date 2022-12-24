import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fadeForm, fadeImg } from '../shared/fade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeForm, fadeImg]
})
export class LoginComponent implements OnInit {
  openPopup: Boolean = false;

  applyForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    position: new FormControl('', [Validators.required]),
    availableDate: new FormControl('', [Validators.required]),
    birthday: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    address: new FormControl('', [Validators.required]),
    expectedSalary: new FormControl(null, [Validators.required]),
    maritalStatus: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }

  getCheck(input: string){
    let inputVal = this.applyForm.get(input)
    return inputVal?.invalid && inputVal.touched
  }

  onSubmit(){
    this.applyForm.reset()
    
    this.openPopup = true;
    setTimeout(()=> this.openPopup = false, 4000)
  }

}
