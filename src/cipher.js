const cipher = {
  encode: function(offset, str) {
    if (typeof offset !== "number" || typeof str !== "string"){
      throw new TypeError ("Error!")
    }
    var aux = "";
    for (var i = 0; i <str.length; i++){
      if(str.charCodeAt(i)>=65&&str.charCodeAt(i)<=90){
          aux+= String.fromCharCode((str.charCodeAt(i)+offset-65)%26+65)    
      }else if(str.charCodeAt(i)>=97&&str.charCodeAt(i)<=122){
        aux+= String.fromCharCode((str.charCodeAt(i)+offset-97)%26+97)
      }else{  
          aux = "No se admiten caracteres fuera del abecedario ingles"
      }
    } 
    return aux;
  },
  decode: function(offset, string) {
    if (typeof offset !== "number" || typeof string !== "string") { 
      throw new TypeError ("Error!")
    }
    var aux = "";
    for (var i = 0; i <string.length; i++){
      if(string.charCodeAt(i)>=65&&string.charCodeAt(i)<=90){
        aux+=String.fromCharCode((string.charCodeAt(i)-offset-90)%26+90)
      }else  if(string.charCodeAt(i)>=97&&string.charCodeAt(i)<=122){
        aux+=String.fromCharCode((string.charCodeAt(i)-offset-122)%26+122)
      
   }else{
        aux = "No se admiten caracteres fuera del abecedario ingles "
      }
    }
    return aux;
  },
};

export default cipher;
