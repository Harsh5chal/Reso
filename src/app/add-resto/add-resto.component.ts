import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  constructor() { }
   addResto= new FormGroup({
     name : new FormControl(''),
     address : new FormControl(''),
     email : new FormControl('')
   
     })

  ngOnInit(): void {
  }
  collectResto(){
    console.warn(this.addResto.value)
  }
}
