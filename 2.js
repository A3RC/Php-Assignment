
document.querySelector('.js-button').addEventListener('click',()=>{
  
  const fname = document.form.name.value;
const address = document.form.address.value;
const email = document.form.email.value;
const gender = document.form.gender.value;
  
  if(fname=="" || fname==null && address=="" || address==null &&email=="" || email==null && gender=="" || gender==null){
    alert("please fill all the field");
    return;
  }
  else{
    alert("form submitted");
    return;
  }
  if(fname.length <=6 && address.length <=6 && email.length <=6){
    alert("fields should not be less than 6 characters");
    return;
  }
  else{
    alert("form submitted");
    return;
  }
})