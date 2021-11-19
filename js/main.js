var elForm = document.querySelector("#form");
var el_input_link = document.querySelector("#img_link");
var el_input_text = document.querySelector("#text");
var el_input_number = document.querySelector("#number");
var el_input_btn = document.querySelector("#btn");
var el_wrapper = document.querySelector(".wrapper");


let data = [
    {
        imgLink: "",
        title:"",
        price:""
        
    }
];

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();


     
    let newBox = document.createElement("div");
    let newImg = document.createElement("img");
    let newname = document.createElement("h3");
    let newprice = document.createElement("p");
    let newBtn = document.createElement("button");

    newBox.setAttribute("class" , "box");
    newImg.setAttribute("class" , "img");
    newImg.setAttribute("src" , el_input_link.value );
    newname.setAttribute("class" , "name");
    newprice.setAttribute("class" , "price");
    newBtn.setAttribute("class" , "btn-buy");
    
    newname.textContent = el_input_text.value;
    newprice.textContent = el_input_number.value + " $";
    newBtn.textContent = "BUY";

    
    el_wrapper.appendChild(newBox);
    newBox.appendChild(newImg);
    newBox.appendChild(newname);
    newBox.appendChild(newprice);
    newBox.appendChild(newBtn);
    
    data.imgLink = el_input_link.value;
    data.title = el_input_text.value;
    data.price = el_input_number.value;
    console.log(data);
    
    el_input_link.value = "";
    el_input_text.value = "";
    el_input_number.value = "";

})

console.log(elForm);