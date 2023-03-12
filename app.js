'use strict';

const allEmployee =[];
let newId=[]
let Idgen = 1001;
let mainDiv = document.getElementById("contentDiv");
let form = document.getElementById("form");

function newEmployee(EmpID,name,dep,level,image,Salary){
    this.EmployeeID=EmpID;
    this.FullName=name;
    this.Department=dep;
    this.level=level;
    this.ImageURL=image;
    this.Salary=Salary;
    allEmployee.push(this);
    
}
newEmployee.prototype.genId =function(){
    this.EmployeeID=(newId +Idgen );
    Idgen ++;
}

let GhaziSamer = new newEmployee(1000,"Ghazi Samer","Administration","Senior","../assets/Ghazi.jpg");
let LanaAli = new newEmployee(1001,"Lana Ali","Finance","Senior","../assets/Lana.jpg");
//let TamaraAyoub = new newEmployee(1002,"Tamara Ayoub","Marketing","Senior","../assets/Tamara.jpg");
//blet SafiWalid = new newEmployee(1003,"Safi Walid","Administration","Mid-Senior","../assets/Safi.jpg");
// let OmarZaid = new newEmployee(1004,"Omar Zaid","Development","Senior");
// let RanaSaleh = new newEmployee(1005,"Rana Saleh","Development","Junior");
// let HadiAhmad = new newEmployee(1006,"Hadi Ahmad","Finance","Mid-Senior");

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
   // debugger
    this.netSalary();
    this.genId();
    //document.write(`<h4>the name is ${this.FullName} && my net salary is ${this.Salary }</h4>`);
    let divCad =document.getElementById("divCards");
    //sec Div
    let creDiv =document.createElement("div");
    creDiv.className="card-style";
    let imgEl =document.createElement("img");
    imgEl.src= this.ImageURL;
    creDiv.appendChild(imgEl);
    divCad.appendChild(creDiv);
    imgEl.style.width="100px";
    mainDiv.appendChild(divCad);

    let h4El = document.createElement("h4");
    h4El.textContent =`Full Name : ${this.FullName} `;
    creDiv.appendChild(h4El)
    divCad.appendChild(creDiv);
    mainDiv.appendChild(divCad);

     let h4Id =document.createElement("h4");
     h4Id.textContent=`Id : ${this.EmployeeID}`;
     creDiv.appendChild(h4Id);


     let depEl =document.createElement("h4");
     depEl.textContent=`Department : ${this.Department}`;
     creDiv.appendChild(depEl)
  
    let levelEl = document.createElement("h4");
     levelEl.textContent=`Level : ${this.level}`;
     creDiv.appendChild(levelEl)


     let SalaryEl =document.createElement("h4");
     SalaryEl.textContent=`Salary : ${this.Salary}`;
     creDiv.appendChild(SalaryEl);
  

}

form.addEventListener("submit",saveTheData);

function saveTheData(event){
    event.preventDefault();
    alert("form successfully submitted !");
    debugger;
    let fullName = event.target.fname.value;
    let ImgUrl = event.target.Img.value;
    let Department = event.target.Department.value;
    let level = event.target.Level.value;


    let nEmployee=new newEmployee(Idgen,fullName,Department,level,ImgUrl);
    nEmployee.render();
    //console.log(event.target.Img.value);
}

function readEmp (){
    //debugger;
    for(let i=0;i<allEmployee.length;i++){
        
        allEmployee[i].render();
    }
}
readEmp();
