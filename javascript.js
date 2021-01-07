var befor ,after ;
var id="0";  //id of image.
var idCopy="0"; //name of src to img.
var flag=true;
var mass=0;

function display(val){   //val is string   2 || 22

    if(val.lengeh == 1){
        id=val;
        idCopy=val;
    }
    else{
        id=val;
        idCopy=val.charAt(0);
    }  
    ////////////////////////////////
    if(flag){
        befor= document.getElementById(id);
        befor.setAttribute("src","images/"+idCopy+".gif");
        flag=false;
    }
    else {
        after= document.getElementById(id);
        after.setAttribute("src","images/"+idCopy+".gif");
        flag=true;
        if( befor.getAttribute("class") == after.getAttribute("class") ){
            befor.setAttribute("onclick","");
            after.setAttribute("onclick","");
            ++mass;
        }
        else{
            setTimeout(function(){
            befor.setAttribute("src","images/Moon.gif");
            after.setAttribute("src","images/Moon.gif");
            id="0";
            idCopy="0";
            },1000);
        }
    }
    ////////////////////////////////
    if(mass==6){
        setTimeout(function(){
        alert("Congratulation for you......");
        location.reload();
        },1000);
    }
}