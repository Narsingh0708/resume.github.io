// alert("loading");

function addNewWeField() {
    // console.log("Adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewedField() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("edField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let edOb = document.getElementById("ed");
    let edAddButtonOb = document.getElementById("edAddButton");

    edOb.insertBefore(newNode, edAddButtonOb);
}

function addNewpField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let pOb = document.getElementById("p");
    let pAddButtonOb = document.getElementById("pAddButton");

    pOb.insertBefore(newNode, pAddButtonOb);

}

function addNewCerField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("cerField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter here");

    let cerOb = document.getElementById("cer");
    let cerAddButtonOb = document.getElementById("cerAddButton");

    cerOb.insertBefore(newNode, cerAddButtonOb);

}

function addNewCorField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("corField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter here");

    let corOb = document.getElementById("cor");
    let corAddButtonOb = document.getElementById("corAddButton");

    corOb.insertBefore(newNode, corAddButtonOb);

}

function addNewSField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("sField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter here");

    let sOb = document.getElementById("s");
    let sAddButtonOb = document.getElementById("sAddButton");

    sOb.insertBefore(newNode, sAddButtonOb);

}

function addNewLField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("lField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter here");

    let lOb = document.getElementById("l");
    let lAddButtonOb = document.getElementById("lAddButton");

    lOb.insertBefore(newNode, lAddButtonOb);

}

// download resume

function downloadResume(){
//    console.log("downloadresume") ;
// name
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;
  // direct

  document.getElementById("nameT2").innerHTML=nameField;

  //contact
  let contactField = document.getElementById("contactField").value;
  let contactT = document.getElementById("contactT");
  contactT.innerHTML = contactField;

  //gamil
  let gmailField = document.getElementById("gmailField").value;
  let gmailT = document.getElementById("gmailT");
  gmailT.innerHTML = gmailField;

  //address
  let addressField = document.getElementById("addressField").value;
  let addressT = document.getElementById("addressT");
  addressT.innerHTML = addressField;

  //gitHub
  let gitField = document.getElementById("gitField").value;
  let gitT = document.getElementById("gitT");
  gitT.innerHTML = gitField;

  //gfg
  let gfgField = document.getElementById("gfgField").value;
  let gfgT = document.getElementById("gfgT");
  gfgT.innerHTML = gfgField;

  //linkedIn
  let linkedField = document.getElementById("linkedField").value;
  let linkedT = document.getElementById("linkedT");
  linkedT.innerHTML = linkedField;


  // language
   let ls = document.getElementsByClassName("lField");
   let str ="";
   for(let e of ls){
    str = str + `<li> ${e.value}</li>`;
   }
   document.getElementById("lT").innerHTML=str;

   //skills
   let vs = document.getElementsByClassName("sField");
   let str1 ="";
   for(let e of vs){
    str1 = str1 + `<li> ${e.value}</li>`;
   }
   document.getElementById("sT").innerHTML=str1;

   //courswork
   let cors = document.getElementsByClassName("corField");
   let str2 ="";
   for(let e of cors){
    str2 = str2 + `<li> ${e.value}</li>`;
   }
   document.getElementById("corT").innerHTML=str2;

   //education
   let eds = document.getElementsByClassName("edField");
   let str3 ="";
   for(let e of eds){
    str3 = str3 + `<li> ${e.value}</li>`;
   }
   document.getElementById("edT").innerHTML=str3;

   //certificate
   let cers = document.getElementsByClassName("cerField");
   let str4 ="";
   for(let e of cers){
    str4 = str4 + `<li> ${e.value}</li>`;
   }
   document.getElementById("cerT").innerHTML=str4;

   //work exprince
   let wes = document.getElementsByClassName("weField");
   let str5 ="";
   for(let e of wes){
    str5 = str5 + `<li> ${e.value}</li>`;
   }
   document.getElementById("weT").innerHTML=str5;

   // project
   let ps = document.getElementsByClassName("pField");
   let str6 ="";
   for(let e of ps){
    str6 = str6 + `<li> ${e.value}</li>`;
   }
   document.getElementById("pT").innerHTML=str6;

   //code for setting image
   let file = document.getElementById("imgField").files[0];
   console.log(file);

   let reader = new FileReader();
   reader.readAsDataURL(file);

   console.log(reader.result);

   //set the image to template
   reader.onloadend=function(){
    document.getElementById("imgTemplate").src=reader.result;
   }

  document.getElementById("resume-form").style.display="none";
  document.getElementById("reseme-template").style.display="block";
}

function printresume(){
    window.print();
}