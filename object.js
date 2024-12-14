// their are three way to declare object
const emp={id:101,nam:"xyz",sal:70000};
console.log(emp);
console.log(emp.id);

//2nd way to declare object

emp1=new Object();
emp1.id=1010;
emp1.name="anurag";
emp1.salary=9000000;

console.log(emp1);


// 3rd way to declare object
function emp3(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}

e=new emp3(102,"anshudi",7852.123);
console.log(e);
