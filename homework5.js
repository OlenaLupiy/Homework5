//Task 1

let mentor = {
    course: 'JS fundamental',
    duration: 3,
    direction: 'web-development'
}
mentor.number = 4;
function propsCount(currentObject){
    let count = 0;
    for (let key in currentObject)
        if(currentObject.hasOwnProperty(key))
            count++;
                return count;}  

console.log(propsCount(mentor));

//Task 1.1
let mentor = {
    course: 'JS fundamental',
    duration: 3,
    direction: 'web-development'
}
mentor.number = 4

const propsCount1 = (currentObject) =>{
    return Object.keys(currentObject).length;
}
console.log(propsCount1(mentor));

//Task 2

let user = {
    firstName: 'Mike',
    surname: 'Smith',
    age: 33,
    isMarried: true,
    salary: 3000,
}
 console.log(Object.getOwnPropertyNames(user));
         

let user = {
    firstName: 'Mike',
    surname: 'Smith',
    age: 33,
    isMarried: true,
    salary: 3000,
}
 function showProps(obj){

    for (let key of Object.keys(obj)){
        console.log(key);}
     
     for (let value of Object.values(obj)){
         console.log(value);

        
 }}
showProps(user);

//Task 3

    class Person{
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;}
            showFullName() {
                alert(this.name +' '+ this.surname)
            } 
        }
        let userPerson = new Person('Peter', 'Peterson');
        console.log(userPerson);

        class Student extends Person{
            constructor(name, surname, midleName, year){
                super(name, surname);
                this.midleName= midleName;
                this.year = year;
            }
            showFullName(){
                console.log((this.name +' '+ this.surname));
                console.log((this.name + ' '+ this.midleName+ ' ' + this.surname ))
            } 
            showCourse(){
                let currentYear = 2021;
                alert(currentYear - this.year);
            }
        }
        let student = new Student('Peter', 'Peterson', 'Petrovych', 2019)
        console.log(student);
        //console.log('Current course: ' + student.showCourse());


    //Task 5
        class Workers{
            constructor(fullName, dayRate, workingDays){
                this.fullName = fullName;
                this.dayRate = dayRate;
                this.workingDays = workingDays;
            }
            showSalary(){
                this.salary = this.dayRate*this.workingDays;
                alert(this.dayRate*this.workingDays);
            }
            #experience = 1.2;
            showsalaryExperience(){
                this.salaryWithExperience = this.salary*this.#experience
                alert(this.salary*this.#experience)
            }
            get experience(){
                return this.#experience;
            }
            set experience(value){
                this.#experience = value;
            }
        }
        const workerJhonson = new Workers('John Jhonson', 20, 23);
        const workerPeterson = new Workers('Peter Peterson', 19, 23);
        const workerBobson = new Workers('Bob Bobson', 21, 23)

        console.log(workerJhonson);
        console.log(workerJhonson.showSalary());
        console.log(workerJhonson.showsalaryExperience());
        workerJhonson.experience = 1.5
        console.log(workerJhonson.showsalaryExperience());

        //Task 6 

        // class GeometricFigure{
        //     currentObject(sideA){
        //         this.sideA = sideA;
        //                     }
        //     getArea(){
        //         alert('')
        //     }
        //     toString(){
        //         alert('Area')
        //     }
        // }
        // class Triangle extends GeometricFigure{
        //    constructor(sideA, height){
        //        super(sideA);
        //        this.height = height;
        //    }
        //    getArea(){
        //        let area = this.sideA*this.height/2;
        //        console.log(area);
        //    }
        //    toString(){
        //        console.log(`Area of triangle is ${area}`)
        //    }
        // }
        // let areaTriangle = new Triangle(3,6);
        // console.log(areaTriangle);