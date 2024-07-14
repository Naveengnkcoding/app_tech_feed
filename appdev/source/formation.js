function drivelistload(e){
    const drvmod = document.getElementById("drvmod");
    if(e == 1){
        drvmod.setAttribute('list', "")
    }else{
        drvmod.setAttribute('list', "kawa")
    }
}
function serchang(e){

    const alrhd = document.getElementById('alrhd');
    const alrfac = document.getElementById('alrfac');
    const alrimhd =  document.getElementById('alrimhd');
    const aimgl = document.getElementById('aimgl');
    const avw = document.getElementById("avw");
    const alrmdiv = document.getElementById("alrmdiv");

    if(e == 0){
        alrmdiv.style.display = "none";
        alrhd.style.display = "none";
        alrfac.style.display = "none";
        alrimhd.style.display = "none";
        aimgl.style.display = "none";
        avw.style.display = "none"
    }
    else{
        alrmdiv.style.display = "block";
        alrhd.style.display = "block";
        alrfac.style.display = "flex";
        alrimhd.style.display = "block";
        aimgl.style.display = "grid";
        avw.style.display = "block"
    }

}
function wstas(e){
    console.log(e);
    const uncm = document.getElementById("wuncomp");
    if(e  == 1){
        uncm.style.display = "none";
    }else{
        uncm.style.display = "block";
    }
}
function  tko(e){
    tka = e;
    const tknbl = document.getElementById("tknbl");
    const progadd = document.getElementById("c7")
    if(e == 1){
        tknbl.style.display = "block"
        c7.style.display = "";
    }else{
        tknbl.style.display = "none";
        c7.style.display = "none";
    }
}
let mat = [];
document.getElementById("madd").onclick = function() {
    var text = document.getElementById("minput").value; 
    var li = "<li>" + text + "</li>";
    mat.push(text);
    document.getElementById("mlist").insertAdjacentHTML('beforeend', li);
    document.getElementById("minput").value = "";
    console.log(mat) // clear the value
  }


//   function val(){
//     switch(nid){
//         case 0:
//             next();
//             break;
//         case 1:
//             db1();
//             next();
//             break;
//         case 2:
//             next();
//             break;
//         case 3:
//             next();
//             break;
//         case 4:
//             next();
//             break;
//         case 5:
//             next();
//             break;
//         case 6:
//             next();
//             break;
// }
//   }                 
