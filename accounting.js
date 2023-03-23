'use strict';
let allEmployee =[];
let adminCount = 0;
let markCount = 0;
let devCount = 0;
let finCount = 0;
let totalNOfEmployees = 0;
let adminSum = 0;
let markSum = 0;
let devSum = 0;
let finSum = 0;
let allDepartmentsSalariesSum =0;
//reach to the tr's
let trAdministration = document.getElementById('trAdmin');
let trMarketing = document.getElementById('trMark');
let trDevelopment = document.getElementById('trDev');
let trFinance = document.getElementById('trFin');
let trFooter = document.getElementById("tFooter");

//allEmployee=getData.JSON.parse(i)
//console.log(allEmployee);



function getData(){
    let retriveArr =localStorage.getItem("aEmployee");
    allEmployee = JSON.parse(retriveArr);
    //console.log(allEmployee);
   
    //allEmployee.push(ObjArr)
    //console.log(allEmployee)
}



function renderTable() {
    debugger;
    for(let i=0;i<allEmployee.length;i++){
        if(allEmployee[i]["Department"]=="Administration"){
            adminCount++;
            adminSum += allEmployee[i]["Salary"];
        }else if (allEmployee[i]["Department"]=="Marketing"){
            markCount++;
            markSum += allEmployee[i]["Salary"];
        }else if (allEmployee[i]["Department"] == "Development"){
            devCount++;
            devSum += allEmployee[i]["Salary"]
        } else if (allEmployee[i]["Department"] == "Finance") {
            finCount++;
            finSum += allEmployee[i]["Salary"];
        }
        console.log(adminCount);
        console.log(adminSum);
    }
   
    totalNOfEmployees =(adminCount + markCount + devCount + finCount);
    allDepartmentsSalariesSum=(adminSum + markSum + devSum + finSum);
    
    console.log(totalNOfEmployees);
    console.log(allDepartmentsSalariesSum);
    
    let tdAdministration = document.createElement("td");
    tdAdministration.textContent= adminCount;
    
    let tdAdministrationAvg = document.createElement("td");
    tdAdministrationAvg.textContent=adminSum/adminCount;
    
    let tdAdministrationSalary =document.createElement("td");
    tdAdministrationSalary.textContent=adminSum
    
    trAdministration.appendChild(tdAdministration);
    trAdministration.appendChild(tdAdministrationAvg);
    trAdministration.appendChild(tdAdministrationSalary);

    let tdMarkiting = document.createElement('td');
    tdMarkiting.textContent = markCount;

    let tdMarkitingAvg = document.createElement('td');
    tdMarkitingAvg.textContent = markSum / markCount;
    
    let tdMarkitingSalary = document.createElement('td');
    tdMarkitingSalary.textContent = markSum;

    trMarketing.appendChild(tdMarkiting);
    trMarketing.appendChild(tdMarkitingAvg);
    trMarketing.appendChild(tdMarkitingSalary);

    
    

    let tdDevelopment =document.createElement('td');
    tdDevelopment.textContent=devCount;

    let tdDevelopmentAvg =document.createElement('td');
    tdDevelopmentAvg.textContent=devSum/devCount;

    let tdDevelopmentSalary = document.createElement('td');
    tdDevelopmentSalary.textContent=devSum;

 
    trDevelopment.appendChild(tdDevelopment);
    trDevelopment.appendChild(tdDevelopmentAvg);
    trDevelopment.appendChild(tdDevelopmentSalary);

    let tdFinance =document.createElement('td');
    tdFinance.textContent=finCount;

    let tdFinanceAvg = document.createElement('td');
    tdFinanceAvg.textContent= finSum/finCount;

    let tdFinanceSalary =document.createElement('td');
    tdFinanceSalary.textContent=finSum;

    trFinance.appendChild(tdFinance);
    trFinance.appendChild(tdFinanceAvg);
    trFinance.appendChild(tdFinanceSalary);

    let tdAllEmployee = document.createElement('td');
    tdAllEmployee.textContent = totalNOfEmployees;

    let tdAllEmployeeAvg = document.createElement('td');
    tdAllEmployeeAvg.textContent = (allDepartmentsSalariesSum) / (totalNOfEmployees);

    let tdAllEmployeeSalary =document.createElement('td');
    tdAllEmployeeSalary.textContent=allDepartmentsSalariesSum;



    trFooter.appendChild(tdAllEmployee);
    trFooter.appendChild(tdAllEmployeeAvg)
    trFooter.appendChild(tdAllEmployeeSalary);



}


  

getData();
renderTable();