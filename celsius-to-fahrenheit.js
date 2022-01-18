console.log("Enter temperature to celsius ");
let stdin3 = process.openStdin();
stdin3.addListener("data",function(str3){
    let celsius = parseInt(str3);
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message)
stdin3.destroy()    
});  
  