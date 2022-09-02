import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'},
    {id: 3, name: 'SMS'},
  ]
  ngOnInit(): void {
    
  }log(x:string){
    console.log(x);
  }
  
  submit(f:any){
    /**f.value is an object because f is a form*/
    console.log(f);
  }
}
