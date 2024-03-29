import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { variationPlacements } from '@popperjs/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'form-using-angular-reactive-form';

  genders = ['Male', 'Female'];

  signupForm!: FormGroup
  


  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "userData": new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      
      'gender': new FormControl('Male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  onAddHobby(){
    
    const controls = new FormControl(null, [Validators.required]);

   
    (<FormArray>this.signupForm.get('hobbies')).push(controls);
    
    console.log(this.signupForm.get('hobbies'));
    console.log("Clicked");
  }
  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

}
