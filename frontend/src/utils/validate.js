export let validateForm=(date)=>{
let today=new Date();   
today.setHours(0,0,0,0);     
let selectedDate=new Date(date);

if(selectedDate < today){
    return "The date must be today or a future date." 
}else{
    return null;
}

}