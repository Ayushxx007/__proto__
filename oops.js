class Person{

  constructor(name,age){
    this.name=name;
    this.age=age;

    function abc(){
      console.log("constructor invoked");
    }
    abc();



  }

  name(){
    return this.name;

  }
  agex(){
    return this.age;
  }



}

const ayush =new Person("ayush",26);

// ayush.__proto__===Person.prototype.

class Student extends Person{

  constructor(name,age,gender){
    super(name,age);
    this.gender=gender;

    function xyz(){
      console.log("child constructor invoked");

    }
    xyz();

  }

  gneder(){
    return this.gender;

  }
  agex(){
    console.log("child age func");
  }

}

const mahika=new Student("mahika",26,"female");
mahika.agex();







//mahika.__proto__===Student.prototype
