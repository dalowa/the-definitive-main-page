export type Category = "WORK" |
"STUDY" |
"HOME" |
"HEALTH AND WELLNESS" |
"FINANCES" |
"SOCIAL" |
"LEISURE" |
"PERSONAL PROJECTS" |
"ORGANIZATION" |
"TECHNOLOGY" ;

export const Categories:Category[] = [
  "WORK",
  "STUDY",
  "HOME",
  "HEALTH AND WELLNESS",
  "FINANCES",
  "SOCIAL",
  "LEISURE",
  "PERSONAL PROJECTS",
  "ORGANIZATION",
  "TECHNOLOGY"
];

export const categoriesColors:{[key:string]:string} = {
  WORK: "border-amber-600",
  STUDY: "border-yellow-300",
  HOME: "border-pink-400",
  "HEALTH AND WELLNESS": "border-red-700",
  
  "FINANCES": "border-cyan-400",
  SOCIAL: "border-orange-600",
  LEISURE: "border-green-500",
  "PERSONAL PROJECTS": "border-lime-400",
  ORGANIZATION: "border-blue-700",
  TECHNOLOGY: "border-violet-700"
};

export class Task{
  public id: number 
  public category: Category
  public name: string
  public description: string
  public dateLimit: Date
  public importantNumber: number
  

  constructor(
    category: Category, 
    name: string, 
    description: string, 
    dateLimit: Date,
    id: number
    ){
    this.category = category
    this.name = name
    this.description = description
    this.dateLimit = dateLimit
    this.importantNumber = this.getImportantNumber()
    this.id = id
    
    
  }

  public getImportantNumber():number {
    this.importantNumber = Math.round(this.dateLimit.getTime()/1000/60/60 -  new Date().getTime()/1000/60/60)
    return Math.round(this.dateLimit.getTime()/1000/60/60 -  new Date().getTime()/1000/60/60)
  }


}


/* export class TaskList {
    public lista: Task[]

    constructor(lista: Task[]){
      this.lista = lista;
    }


  public sortListUp():void{
    this.lista = this.lista.sort((a,b) => {
          return  b.importantNumber - a.importantNumber
          })
  }

  public addToList(tarea: Task):void {
    this.lista.push(tarea)
  }

  public deleteFromList(id:number):void{

  }

  public show():void {
    console.log(this.lista)
  } 
} */


/* private getTailwindColor():string {

  const categories:{[key:string]:string} = {
    WORK: "bg-amber-600",
    STUDY: "bg-yellow-300",
    HOME: "bg-pink-400",
    "HEALTH AND WELLNESS": "bg-red-700",
    FINANCES: "bg-cyan-400",
    SOCIAL: "bg-orange-600",
    LEISURE: "bg-green-500",
    "PERSONAL PROJECTS": "bg-lime-400",
    ORGANIZATION: "bg-blue-700",
    TECHNOLOGY: "bg-violet-700"
  };
  return categories[this.category]
  
} */