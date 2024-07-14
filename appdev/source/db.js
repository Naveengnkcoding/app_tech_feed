// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
/// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXAf6wzlxN6kdS7xiOzPsbo-qjqw6LeWE",
  authDomain: "skilltech-bb672.firebaseapp.com",
  databaseURL: "https://skilltech-bb672-default-rtdb.firebaseio.com",
  projectId: "skilltech-bb672",
  storageBucket: "skilltech-bb672.appspot.com",
  messagingSenderId: "513594198875",
  appId: "1:513594198875:web:6d7f060240c2fc8ef1687e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getDatabase,
  ref,
  child,
  set,
  get,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import {getStorage, ref as sref, uploadBytes, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

const db = getDatabase();
const storage = getStorage(app);
let token = "";

let url = {
  durl: '',
  aurl: '',
  wurl: '',
  eurl: '',        
};


function add1() {

  let name = document.getElementById("ename").value;
  let stamp = new Date();
  let tokn = document.getElementById("apln");
  let tkn = document.getElementById("tokn");
  let gentkn = stamp.getFullYear() + (name.toLowerCase()).slice(0,2) + ("0" + stamp.getMonth()).slice(-2) + ("0" + stamp.getDate()).slice(-2) + stamp.getHours() + stamp.getMinutes();

  tokn.innerHTML = gentkn;
  tkn.value = gentkn;
  console.log(gentkn);
  if(token == ""){
    token = gentkn;
    set(ref(db, 'application/' + token), {
      ename: name,
      comname: "-",
      cusname: "-",
      cusadd: "-",
      cusgst: "-",
      drvtyp: "-",
      drvmod: "",
      kw: "",
      amps: "",
      drvimg: "",
      wrktkn: "",
      srvtyp: "",
      alrfac: "",
      alrimg: "",
      wrksts: "",
      tknoff: "",
      cindate: "",
      wrkimg: "",
      issfac: "",
      prodat: "",
      srvabl: "",
      findat: "",
      matirpl: "",
      abtcomp: "",
      abteng: "",
      abtwrk: "",
      stratn: "",
      signimg: ""
    })
      .then(() => {
        alert("Application Generated and Updated Succesfully");
        next();
      })
      .catch((error) => {
        console.log(error);
      });
      console.log("db setted");
  }else{
    
  }
}

function add2() {
  ////Totl 4 data Customer
  let compname = document.getElementById('cmname').value;
  let cusname = document.getElementById('cuname').value;
  let cusadd = document.getElementById('cuadd').value;
  let cusgst = document.getElementById('cugst').value;

    //////Addding Field in same firebase
  update(ref(db, 'application/' + token), {
    compname: compname,
    cusname: cusname,
    cusadd: cusadd,  
    cusgst: cusgst
  })
    .then(() => {
      alert("Company Details Stored Successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}

function add3(){
  ////Total Drive data
  let drvtyp = document.getElementById("drvtyp").value;
  let drvmod = document.getElementById("drvm").value;
  let kw = document.getElementById("kw").value;
  let amps = document.getElementById("amps").value;
  let iurl = url['durl'];

  //////Addding Field in same firebase
  update(ref(db, 'application/' + token), {
    drvtyp: drvtyp,
    drvmod: drvmod,
    kw: kw,
    amps: amps,
    drvimg: iurl,
  })
    .then(() => {
      alert("Drive Details Stored Successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}

function add4(){

     ////Total Drive data
  let wrktkn = document.getElementById("wrk").value;
  let srvtyp = document.getElementById("styp").value;
  let alrfac = document.getElementById("kw").value;
  let alrimg = url['aurl'];
  let cindate = document.getElementById("idat").value;
  let wrkimg = url['wurl'];
  let wsts = document.querySelector('input[name="wsts"]:checked').value;
  let toff = document.querySelector('input[name="tkn"]:checked').value;
  //////Addding Field in same firebase
  update(ref(db, 'application/' + token), {
    
    wrktkn: wrktkn,
    srvtyp: srvtyp,
    alrfaac: alrfac,
    alrimg: alrimg,
    wrksts: wsts,
    tknofff: toff,
    cindate: cindate,
    wrkimg: wrkimg,
    
  })
    .then(() => {
      alert("Service & Work Details Stored Successfully");
    })
    .catch((error) => {
      console.log(error);
    });

}

function add5(){
  let ifac = document.getElementById("ifac").value;
  let pdate = document.getElementById("pdat").value;
  let serabl = document.getElementById("serabl").value;
  let cdate = document.getElementById("cdat").value;
  let matr = mat;
  
  update(ref(db, 'application/' + token), {
    

    issfac: ifac,
    prodat: pdate,
    srvabl: serabl,
    findat: cdate,
    matirpl: matr,
    
  })
    .then(() => {
      alert("Service Done Details Stored Successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}


function add6(){
  let abtc = document.getElementById("abtc").value;
  let abte = document.getElementById("abte").value;
  let abtw = document.getElementById("abtw").value;
  let rate = r;
  let signurl = url['eurl'];
  
  update(ref(db, 'application/' + token), {
    
      abtcomp: abtc,
      abteng: abte,
      abtwrk: abtw,
      stratn: rate,
      signimg: signurl,
    
  })
    .then(() => {
      alert("Ratings Updated Successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}
//////Image Upload Function

async function updimg(obj) {
      const Fileinput = document.getElementById(obj[0]);
      const file = Fileinput.files[0];
      console.log("called");
      console.log(obj);
      if (file) {
        const imageName = Date.now() + file.name;
        console.log("file true  ", imageName);
        const storageRef = sref(storage, imageName);
        await uploadBytes(storageRef, file);

       const imgURL = await getDownloadURL(storageRef);

       ////Img Prevview
       const imgprv = document.getElementById(obj[2]);
       imgprv.src = imgURL;
       url[obj[1]] = imgURL;

           imgprv.style.display = "block";
            document.getElementById(obj[3]).style.display = "none";
            console.log(url['durl']);
       }
      }

document.getElementById("dfii").addEventListener("change", () => {
        const obj = ["dfii", "durl", "divw", "dtv"];
        updimg(obj);
      });

document.getElementById("afii").addEventListener("change", () => {
        const obj = ["afii", "aurl", "aaivw", "atv"];
        updimg(obj);
      });   
document.getElementById("wfii").addEventListener("change", () => {
  const obj = ["wfii", "wurl", "wivw", "wtv"];
  updimg(obj);
});



const canvas = document.getElementById("signature-pad");

let epadv = 1;
async function updsign() {
  const dataURL = canvas.toDataURL('image/png'); // Or 'image/png'

  const file = await fetch(dataURL)
  .then((response) => response.blob())
  .then((blob) => new File([blob], 'file.png', { type: 'image/png' }));

  if(epadv == 1){
    
  const signName = "Sign/" + Date.now() + "s.png";
  const storageRef = sref(storage, signName);
        await uploadBytes(storageRef, file);
        const imgURL = await getDownloadURL(storageRef);
        url['eurl'] = imgURL;
  }

    ////// Operatioon Showing
    const esignPreview = document.getElementById("esivw");
    esignPreview.src = url['eurl'];
    const imgv = document.getElementById("esivw");
    const clear = document.getElementById("clear");
    const pad =  document.getElementById("signature-pad");
    imgv.style.display = "block";
    if(epadv == 1){
        pad.style.display = "none";
        clear.style.display = "none";
        epadv = 1212;
    }else{
        pad.style.display = "block";
        clear.style.display = "inline-flex";
        epadv = 1;
    } 
  }
document.getElementById("upload").addEventListener("click", updsign);

function val(){
  switch(nid){
      case 0:
          next();
          break;
      case 1:
          add1();
          break;
      case 2:
          add2();
          next();
          break;
      case 3:
          add3();
          next();
          break;
      case 4:
          add4();
          next();
          break;
      case 5:
        add5();
          next();
          break;
      case 6:
        add6();
          next();
          break;
}
}                 

document.getElementById("nxt").addEventListener("click", val);
