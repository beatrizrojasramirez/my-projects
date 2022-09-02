import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-list-component',
  templateUrl: './object-list-component.component.html',
  styleUrls: ['./object-list-component.component.css']
})
export class ObjectListComponentComponent implements OnInit {
  form;
  /*
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    mylist: new FormArray([])
  })*/

  /* The constructor below could replace the information above */
  constructor(fb: FormBuilder){
    this.form = fb.group({
      name: ['',Validators.required],
      contact: fb.group({
        email:[],
        phone:[]
      }),
      mylist: fb.array([])
    });
  }
  addMyItem(mItem:HTMLInputElement){
    this.myList.push(new FormControl(mItem.value));
    mItem.value = '';
  }

  removeMyItem(i:number){
    this.myList.removeAt(i);
  }

  get myList(){
    return this.form.get('mylist') as FormArray;
  }

  getListItems(){
    return (this.form.get('mylist') as FormArray).controls;

  }

  ngOnInit(): void {
  }

}