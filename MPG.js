var floatMiles;
var floatGallons;
var floatMPG;

floatMiles = parseFloat(prompt("Enter miles driven"));
floatGallons = parseFloat(prompt("Enter gallons of gas used"));
floatMPG = floatMiles / floatGallons;
alert("Miles per gallon = " + floatMPG);