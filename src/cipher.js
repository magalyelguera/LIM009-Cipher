window.cipher = {
  encode: (offset,string) => {
   let nuevomensaje='';
   for (let i = 0; i < string.length; i++) {
let letra=string[i].charCodeAt();
     if (string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90){
      let numberAcci=((letra)-65+offset)%26+65;
      let lettercipher = String.fromCharCode(numberAcci);
       nuevomensaje=nuevomensaje+lettercipher;
     } else {
       nuevomensaje+=nuevomensaje+string[i];
     }
    }
return nuevomensaje;
 },

  decode: (offset,string) => {
    let nuevomensaje2='';
    for (let i =0; i< string.length; i++){
      if (string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90){
        let numberAcci=((string[i].charCodeAt())-90-offset)%26+90;
        let lettercipher =String.fromCharCode(numberAcci);
        nuevomensaje2=nuevomensaje2+lettercipher;

   } else {

     nuevomensaje2+=nuevomensaje2+string[i];
   }
  }
      return nuevomensaje2;
}
    };