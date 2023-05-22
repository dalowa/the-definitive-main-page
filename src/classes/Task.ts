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
  public dateLimit: string
  public importantNumber: number
  
  constructor(
    category: Category, 
    name: string, 
    description: string, 
    dateLimit: string,
    id: number
    ){
    this.category = category
    this.name = name
    this.description = description
    this.dateLimit = dateLimit
    this.importantNumber = Math.round(new Date(this.dateLimit).getTime()/1000/60/60 -  new Date().getTime()/1000/60/60)
    this.id = id
  }

  
}
