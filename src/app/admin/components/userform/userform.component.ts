import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit{
  constructor(private formBuilder: FormBuilder,  private http: HttpClient) { }
  form!: FormGroup<any>;
  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],      
      designation: ['', Validators.required],
      gender: ['', Validators.required],      
      married: ['', Validators.requiredTrue],      
    });
  }
  successMessage:string='';
  formerrorMessage:string='';
  postData:any[]=[];
  onSubmit() {
    if (this.form.valid) {
      //console.log(this.form.value);
      // Perform form submission logic here
      this.http.post('http://localhost:3000/employees', this.form.value).subscribe({
        next: (response: any) => {
          this.successMessage = 'posted!';
          // this.postData = response;
        },
        error: (error) => {
          this.formerrorMessage = 'not Saved. Run Json Server (json-server --watch db.json), or change API url';
        }
      });

    } else {
      this.validateAllFormFields();
    }
  }

  validateAllFormFields() {
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }

  isFieldValid(field: string) {
    const control = this.form.get(field);
    return control?.touched && control?.invalid;
  }

  getErrorMessage(field: string) {
    const control = this.form.get(field);

    if (control?.hasError('required')) {return 'This field is required';}
    if (control?.hasError('email')) {return 'Invalid email';}
    return '';
  }
}





