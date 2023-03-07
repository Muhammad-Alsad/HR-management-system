'use strict';

const allEmployee =[];

function newEmployee(EmpID,name,dep,level,image,Salary){
    this.EmployeeID=EmpID;
    this.FullName=name;
    this.Department=dep;
    this.level=level;
    this.ImageURL=image;
    this.Salary=Salary;
    allEmployee.push(this);
    
}

let GhaziSamer = new newEmployee(1000,"Ghazi Samer","Administration","Senior");
let LanaAli = new newEmployee(1001,"Lana Ali","Finance","Senior");
let TamaraAyoub = new newEmployee(1002,"Tamara Ayoub","Marketing","Senior");
let SafiWalid = new newEmployee(1003,"Safi Walid","Administration","Mid-Senior");
let OmarZaid = new newEmployee(1004,"Omar Zaid","Development","Senior");
let RanaSaleh = new newEmployee(1005,"Rana Saleh","Development","Junior");
let HadiAhmad = new newEmployee(1006,"Hadi Ahmad","Finance","Mid-Senior");


newEmployee.prototype.calculating =function () {
    //debugger
    if(this.level == "Senior"){
        this.Salary =Math.floor((Math.random()*(2000-1500)+1500))   
    } else if (this.level == "Mid-Senior"){
        this.Salary =Math.floor((Math.random()*(1500-1000)+1000))
    } else if(this.level =="Junior"){
        this.Salary =Math.floor((Math.random()*(1500-1000)+1000))
    }
}

newEmployee.prototype.netSalary =function () {
    //debugger
    this.calculating();
    this.Salary = this.Salary - (this.Salary*0.075);
}

newEmployee.prototype.render =function () {
    //debugger;
    this.netSalary();
    document.write(`<h4>the name is ${this.FullName} && my net salary is ${this.Salary }</h4>`);
}

function readEmp (){
    //debugger;
    for(let i=0;i<allEmployee.length;i++){
        allEmployee[i].render();
    }
}
readEmp();
