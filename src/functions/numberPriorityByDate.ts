export default function numberPriorityByDate(day:number, month: number, year: number):number{
  

    const actualDate = new Date().getTime()/1000/60/60/24
    const newDate = new Date(year, month - 1, day, 0, 0, 0).getTime()/1000/60/60/24
  
    const difference = Math.round(newDate -  actualDate)
  
    if(difference < 3){
      console.log("difference is: ",difference)
     return 100
    }
    if(difference < 5){
      console.log("difference is: ",difference)
      return 90
    }
    if(difference < 7){
      console.log("difference is: ",difference)
      return 80
    }
    if(difference < 9){
      console.log("difference is: ",difference)
      return 70
    }
    if(difference < 11){
      console.log("difference is: ",difference)
      return 60
    }
    if(difference < 13){
      console.log("difference is: ",difference)
      return 50
    }
    if(difference < 15){
      console.log("difference is: ",difference)
      return 40
    }
    if(difference < 17){
      console.log("difference is: ",difference)
      return 30
    }
    if(difference < 19){
      console.log("difference is: ",difference)
      return 20
    }
  
    console.log("difference is: ",difference)
    return 10
  }