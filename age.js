var floatAge, floatMonths, intWeeks, intFortnights;

floatAge = parseFloat(prompt("Enter how old you are."));
floatDays = floatAge * 365.25;
floatMonths = floatAge * 12;
intWeeks = (floatDays / 7).toFixed(2);
intFortnights = (floatDays/14).toFixed(2);
alert("Your age is " + floatAge);
alert("Your age in months is " + floatMonths);
alert("Your age in weeks is " + intWeeks);
alert("Your age in fortnights is " + intFortnights);
alert("Your age and in days is " + floatDays);