import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  model:any = {};
  cover!:string;

  onFileSelected(event:any){

    const file = event.target.files[0];

  }

  onSubmit(form:NgForm){

    if(form.invalid){
      console.log('form invalid');
      form.control.markAllAsTouched();
      return ;
    }
    console.log(form.value);

  }
}
