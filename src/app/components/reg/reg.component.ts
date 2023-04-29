import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent  implements OnInit{
    ngOnInit(): void {
      this.addRegister()
    }
    regForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      bmi: new FormControl(''),
      bmiResult: new FormControl(''),
      gender: new FormControl(''),
      trainer: new FormControl(''),
      pacakge: new FormControl(''),
      important: new FormControl(''),
      gymBefore: new FormControl(''),
      date: new FormControl(''),
    });

    addRegister(){
      console.log(this.regForm.value, 'Form Value');
    
    }
}
