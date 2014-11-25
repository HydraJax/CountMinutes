function CountingMinutesI(str) { 
str = str.split("-");
console.log (str);
console.log(str[0] + str[1]);
var str1Split = str[0].split("");
var str2Split = str[1].split("");
console.log(str1Split.indexOf("a"));
var str1 = "";
var str2 = "";
var lapseTime = "";
var time = "";
var FinalTime = "";
var solution = "";

//   parse the hours and minutes
str1 = str1 + str[0].split(":");
  console.log("p " + str1);
str1 = str1.slice(0,str1.length-2).split(",");
  console.log(str1);
str2 = str2 + str[1].split(":");
str2 = str2.slice(0,str2.length-2).split(",");
  console.log(str2);
  
  if ((str1Split.indexOf("p") !== -1 && str2Split.indexOf("a") !== -1) || (str1Split.indexOf("a") !== -1 && str2Split.indexOf("p") !== -1)) {
    console.log("calc" + str1Split.indexOf("m"));
    lapseTime = 12;
    FinalTime = lapseTime - Math.round(str1[0]);
    console.log("pig" + FinalTime);
    solution = (FinalTime + str2[0]) * 60;
    
    console.log(solution);
    
    }
  
  else {
    console.log(str2[0]+ " "+ str1[0] + " " + str2[1] + " " + str1[1]);
    solution = Math.ceil(((str2[1] / 60) + (str1[1] /60))  * 60) + (str1[0] - str2[0]) ;
    console.log(solution);
  }
  return str; 
         
}

CountingMinutesI("12:30pm-12:00am");