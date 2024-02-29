let business_name = document.getElementById("business_name");
let business_category = document.getElementById("business_category");

function select_category(){
    if(business_name.value ==""){
      alert("Enter Business Name");
    }
}

function valid_name(input){
    input.value = input.value.trimStart();
}