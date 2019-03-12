window.cipher = {
  encode : (offset, string) => {
    let nuevoMensaje='';
    for (let i = 0; i <string.length; i++) {
      if (string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90){
       let numberAcci = ((string[i].charCodeAt())-65+offset)%26+65;
       let lettercipher = String.fromCharCode(numberAcci);
        nuevoMensaje=nuevoMensaje+lettercipher;
      } else {
        nuevoMensaje+=nuevoMensaje+string[i];
      }
     }
     return nuevoMensaje;
  },
  decode : (offset, string)=> {
    
    let nuevoMensaje2='';
    for (let i =0; i<string.length; i++){
      if (string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90){
        let numberAcci=((string[i].charCodeAt())-90-offset)%26+90;
        let lettercipher =String.fromCharCode(numberAcci);
        nuevoMensaje2=nuevoMensaje2+lettercipher;

   } else {

     nuevoMensaje2+=nuevoMensaje2+string[i];
   }
  }
      return nuevoMensaje2;
  },
};






























/*window.cipher = {
  encode: (offset, string) => {
   let nuevoMensaje='';
   for (let i = 0; i <string.length; i++) {
     if (string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90){
      let numberAcci=((string[i].charCodeAt())-65+offset)%26+65;
      let lettercipher = String.fromCharCode(numberAcci);
       nuevoMensaje=nuevoMensaje+lettercipher;
     } else {
       nuevoMensaje+=nuevoMensaje+string[i];
     }
    }
return nuevoMensaje;
 },

  decode: (offset,string) => {
    let nuevoMensaje2='';
    for (let i =0; i<string.length; i++){
      if (string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90){
        let numberAcci=((string[i].charCodeAt())-90-offset)%26+90;
        let lettercipher =String.fromCharCode(numberAcci);
        nuevoMensaje2=nuevoMensaje2+lettercipher;

   } else {

     nuevoMensaje2+=nuevoMensaje2+string[i];
   }
  }
      return nuevoMensaje2;
}
    };
    */