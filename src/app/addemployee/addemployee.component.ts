import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }

  employeeCode=""
  employeeName=""
  designation=""
  gender=""
  companyName=""
  salary=""
  companyAddress=""
  mobileNo=""
  companyEmail=""
  yearOfExperience=""
  bloodGroup=""
  dob=""

  readValues=()=>{
    let data={
      "employeeCode":this.employeeCode,
      "employeeName":this.employeeName,
      "designation":this.designation,
      "gender":this.gender,
      "companyName":this.companyName,
      "salary":this.salary,
      "companyAddress":this.companyAddress,
      "mobileNo":this.mobileNo,
      "companyEmail":this.companyEmail,
      "yearOfExperience":this.yearOfExperience,
      "bloodGroup":this.bloodGroup,
      "dob":this.dob

    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
