// PLEASE DON'T change function name
module.exports = function makeExchange(currency) 
{
    // Your code goes here!
    // Return an object containing the minimum currencyer of coins needed to make change
	var array=[,,,,];
	var array2=["H: ", "Q: ", "D: ", "N: ","P: "];
	result=new Object();
	result={}; 
	var ind=0;
		if(currency>10000)
		{
			return {error: "You are rich, my friend! We don't have so much coins for exchange"};
		}
		else
		{
			if(currency<=0)
			{
				return {};
			}
			else
			{
				array[0]=Math.floor(currency/50);
				currency=currency-array[0]*50;
				array[1]=Math.floor(currency/25);
				currency=currency-array[1]*25;
				array[2]=Math.floor(currency/10);
				currency=currency-array[2]*10;
				array[3]=Math.floor(currency/5);
				currency=currency-array[3]*5;
				array[4]=currency;
				for(var i=0;i<5;i++)
				{	
					/*if(i==0)
					{
						result = result + "{ ";
					}*/
						
					if(array[i]!=0)
					{	
						if(ind>0)
						{
							result= result + ", " + array2[i] + array[i]	
						}
						else
						{
							result= result + array2[i] + array[i];
						}
						ind++;
						
					}
					/*if(i==4)
						{
							result=result + "}";
						}*/
				
				}
				return result;
			}
		}
}
