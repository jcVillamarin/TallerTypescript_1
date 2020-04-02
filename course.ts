export class Course {

    public name:string;
    public credits:number;
    public professor:string;

    constructor(name:string, professor:string, credits:number  ){
        this.name=name;
        this.credits=credits;
        this.professor=professor;
    }

}
