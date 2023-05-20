export type Category = "STUDY" | "FAMILY" | "PERSONAL" | "HOME" | "SOCIAL" | "HEALTH" | "ANYTHING" | "WORK" | string ;

export const Categories:Category[] = ["STUDY" , "FAMILY" , "PERSONAL" , "HOME" , "SOCIAL" , "HEALTH" , "ANYTHING", "WORK"]

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

  private getDatePriority():number {
    const actualDate = new Date().getTime()/1000/60/60/24;
    const newDate = this.dateLimit.getTime()/1000/60/60/24;

    const difference = Math.round(newDate -  actualDate)
    
    if(difference < 3){      
     return 100
    }
    if(difference < 5){      
      return 90
    }
    if(difference < 7){     
      return 80
    }
    if(difference < 9){
      return 70
    }
    if(difference < 11){
      return 60
    }
    if(difference < 13){
      return 50
    }
    if(difference < 15){
      return 40
    }
    if(difference < 17){
      return 30
    }
    if(difference < 19){
      return 20
    }
    return 10
  }

  private getCategoryPriority():number {

    const categories:{[key:string]:number} = {
      STUDY: 90,
      FAMILY: 85,
      PERSONAL: 70,
      HOME: 65,
      SOCIAL: 60,
      HEALTH: 95,
      WHATEVER: 40
    }
    return categories[this.category]
    
  }

  public getImportantNumber():number{
    this.importantNumber = this.getCategoryPriority() + this.getDatePriority()
    return this.getCategoryPriority() + this.getDatePriority()
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