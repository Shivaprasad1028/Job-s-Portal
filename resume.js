



function previewImage(){
    let oFReader = new FileReader();
    oFReader.readAsDataURL(imageElem.files[0]);
    oFReader.onload = function(ofEvent){
        imageDsp.src = ofEvent.target.result;
    }
}

   


function generateCV(){
   let firstfield = document.getElementById("firstfield").value;
  
    let firsttemp = document.getElementById("firsttemp");
  
     firsttemp.innerHTML = firstfield;


     document.getElementById("firstttemp").innerHTML = firstfield;
     
     let middlefield = document.getElementById("middlefield").value;
  
     let middletemp = document.getElementById("middletemp");
   
      middletemp.innerHTML = middlefield;

      document.getElementById("middlettemp").innerHTML = middlefield;

      let lastfield = document.getElementById("lastfield").value;
  
      let lasttemp = document.getElementById("lasttemp");
    
       lasttemp.innerHTML = lastfield;

     
       document.getElementById("lastttemp").innerHTML = lastfield;
       document.getElementById("designtemp").innerHTML = document.getElementById("designfield").value;
       document.getElementById("addtemp").innerHTML = document.getElementById("addressfield").value;
       document.getElementById("emailtemp").innerHTML = document.getElementById("emailfield").value;
       document.getElementById("phonetemp").innerHTML = document.getElementById("phonefield").value;
       document.getElementById("sometemp").innerHTML = document.getElementById("summaryfield").value;
       document.getElementById("imagetemp").innerHTML = document.getElementById("imagefield").value;

       document.getElementById("achievetemp").innerHTML = document.getElementById("titlefield").value;
       document.getElementById("achievetwotemp").innerHTML = document.getElementById("descriptionfield").value;

       let exptitlefield = document.getElementById("exptitlefield").value;
  
       let exptitletemp = document.getElementById("exptitletemp");
     
        exptitletemp.innerHTML = exptitlefield;

       document.getElementById("exptitletemp").innerHTML = document.getElementById("exptitlefield").value;
       document.getElementById("expcomptemp").innerHTML = document.getElementById("expcompanyfield").value;
       document.getElementById("expcitytemp").innerHTML = document.getElementById("explocationfield").value;
       document.getElementById("expstarttemp").innerHTML = document.getElementById("expstartfield").value;
       document.getElementById("expendtemp").innerHTML = document.getElementById("expendfield").value;
       document.getElementById("expdestemp").innerHTML = document.getElementById("expdesfield").value;
       

       let schoolfield = document.getElementById("schoolfield").value;
  
       let edschooltemp = document.getElementById("edschooltemp");
     
        edschooltemp.innerHTML = schoolfield;
        document.getElementById("edschooltemp").innerHTML = document.getElementById("schoolfield").value;
       document.getElementById("edtitletemp").innerHTML = document.getElementById("degreefield").value;
     
    
       document.getElementById("edcitytemp").innerHTML = document.getElementById("cityfield").value;
       document.getElementById("edstarttemp").innerHTML = document.getElementById("stfield").value;
       document.getElementById("edendtemp").innerHTML = document.getElementById("enfield").value;
       document.getElementById("eddestemp").innerHTML = document.getElementById("dfield").value;


       document.getElementById("pronametemp").innerHTML = document.getElementById("pronamefield").value;
       document.getElementById("prolinktemp").innerHTML = document.getElementById("prolinkfield").value;
       document.getElementById("prodestemp").innerHTML = document.getElementById("prodesfield").value;

       document.getElementById("skilltemp").innerHTML = document.getElementById("skillfields").value;

       document.getElementById("cv-form").style.display='none';
       document.getElementById("cv-template").style.display='block';
     }

 
     function PrintCV(){
        window.print();
     }
    