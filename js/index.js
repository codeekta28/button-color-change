console.log("This is index.js file");
function getSelectedValue(){
    let value = document.querySelector(".colors").value;
    console.log(value);
    // we have to get the id of all the buttons ;
    // then change the background color to value
    let buttons = document.querySelectorAll(".btn")
    buttons.forEach((button)=>{
        button.style.backgroundColor = value;
        if(value==="random"){
            button.style.backgroundColor = "";
        }

    })
}