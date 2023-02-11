function Convert()
            {
                var val=document.form.temp.value;
                var units_from=document.form.from.value;
                var units_to=document.form.to.value;
                var result= document.getElementById("answer");
                console.log(units_from);
                console.log(units_to);
                console.log(val); 
                var error=document.getElementById("error");
                if(isNaN(val))
                {   
                    error.textContent='*Enter a Numeric value';
                    result.textContent="";
                    console.log("false");

                    return false;
                }
                else if(units_from==units_to)
                { 
                    error.textContent='*Both the units are same ';
                    result.textContent="";
                }
                else
                {   val=Math.round(val);
                    console.log(val);
                    error.textContent="";
                    console.log("true");
                    if(units_from=="kelvin" && units_to=="celsius")
                    { 
                        var c=val-273.15;
                        console.log(c)
                        result.textContent=c+' °'+'Celsius';

                    }
                    else if(units_from=="kelvin" && units_to=="fahrenheit")
                    {
                        var f = (val - 273.15) * (9/5) + 32;
                        result.textContent=f+' °'+'Fahrenheit';

                    }
                    else if(units_from=="celsius" && units_to=="fahrenheit")
                    { 
                        var f=(9/5)*val+32;
                        result.textContent=f+' °'+'Fahrenheit';
                    }
                    else if(units_from=="celsius" && units_to=="kelvin")
                    { 
                        var k=val+273.15;
                        result.textContent=k+'Kelvin';
                    }
                    else if(units_from=="fahrenheit" && units_to=="celsius")
                    { 
                        var c=((val-32)*5)/9;
                        result.textContent=c+'°'+'Celsius';
                    }
                    else if(units_from=="fahrenheit" && units_to=="kelvin")
                    { 
                        var k=(val-32)*(5/9)+273.15;
                        result.textContent=k+' Kelvin';
                    }
                    result.style.padding="20px";

                    return true;

                }
            }
 