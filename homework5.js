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
  console.log(Object.values(obj));
  console.log(Object.keys(obj));
           
 }
showProps(user);

//Task 3

    class Person{
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;}
            showFullName() {
                return (this.surname +' '+ this.name)
            } 
        }
        
        class Student extends Person{
            constructor(name, surname, year){
                super(name, surname);
                this.year = year;
            }
            showFullName(midleName){
                return super.showFullName() + ' '+ midleName;
            } 
            showCourse(){
                let date = new Date();
                let currentYear = date.getFullYear();
                return (currentYear - this.year);
            }
        }
        let student1 = new Student('Peter', 'Petrenko', 2019)
        console.log(student1);
        console.log(student1.showFullName('Petrovych'));
        console.log('Current course: ' + student1.showCourse());

        let student2 = new Student('Sam', 'Semenchenko', 2017);
        console.log(student2.showFullName('Semenovych')),
        console.log('Current course ' + student2.showCourse());


    //Task 5
        class Workers{
            #experience = 1.2;
            constructor(fullName, dayRate, workingDays){
                this.fullName = fullName;
                this.dayRate = dayRate;
                this.workingDays = workingDays;
            }
            showSalary(){
                console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`);
                
            }
                showsalaryExperience(){
                console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays * this.experience}`);
            }
            showSalaryWorker(){
                return `${this.dayRate * this.workingDays* this.experience}`;
            }
            get experience(){
                return this.#experience;
            }
            set experience(value){
                this.#experience = value;
            }

            sortSalaries(workesrArray){

                let sortedSalary = workesrArray.sort(function(a, b){
                    return a.showSalaryWorker() - b.showSalaryWorker();
                })
                for (let i = 0; i < sortedSalary.length; i++) {
                    console.log(sortedSalary[i].fullName + ': '+ sortedSalary[i].showSalaryWorker()) ;
                    
                }
            }
        }
        const workerJhonson = new Workers('John Jhonson', 20, 23);
        const workerPeterson = new Workers('Peter Peterson', 19, 23);
        const workerBobson = new Workers('Bob Bobson', 21, 23)

        console.log(workerJhonson.fullName);
        workerJhonson.showSalary();
        console.log('New experience: ' + workerJhonson.experience);
        workerJhonson.showsalaryExperience();
        workerJhonson.experience = 1.5
        console.log('New experience: ' + workerJhonson.experience);
        workerJhonson.showsalaryExperience();

        console.log(workerPeterson.fullName);
        workerPeterson.showSalary();
        console.log('New experience: ' + workerPeterson.experience);
        workerPeterson.showsalaryExperience();
        workerPeterson.experience = 1.5
        console.log('New experience: ' + workerPeterson.experience);
        workerPeterson.showsalaryExperience();

        console.log(workerBobson.fullName);
        workerBobson.showSalary();
        console.log('New experience: ' + workerBobson.experience);
        workerBobson.showsalaryExperience();
        workerBobson.experience = 1.5
        console.log('New experience: ' + workerBobson.experience);
        workerBobson.showsalaryExperience();

        let workesrArray = [workerJhonson, workerPeterson, workerBobson];
        workerBobson.sortSalaries(workesrArray);

        //Task 6 

        class GeometricFigure{
                    getArea(){
                        return 0;
                            }
            toString(){
                return Object.getPrototypeOf(this).constructor.name;
            }
        }
        class Triangle extends GeometricFigure{
           constructor(b, h){
               super();
               this.base = b;
               this.height = h;
           }
    
           getArea(){
               return  this.base*this.height/2;
               
           }
        }
           class Square extends GeometricFigure{
               constructor(a){
                   super();
                   this.side = a;
               }
               getArea(){
                   return this.side**2;
               }
           }
           class Circle extends GeometricFigure{
               constructor(r){
                   super();
                   this.radius = r;
               }
               getArea(){
                   return Math.PI * this.radius**2;
               }
           }
           function handleFigures(figures) {
               return figures.reduce(function(sum, figure) {
                   if (figure instanceof GeometricFigure){
                       console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
                       return sum + figure.getArea()
                   }

                   
               }, 0);
           }
const figures = [new Triangle(4, 5), new Square(8), new Circle(4)];
console.log(handleFigures(figures));