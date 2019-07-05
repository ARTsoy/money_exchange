// PLEASE DON'T change function name
module.exports = function makeExchange(currency) 
{
    // Your code goes here!
    // Return an object containing the minimum currencyer of coins needed to make change
	var array=[,,,,];
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
				if(array[0]>0)
				{
					result["H"]=array[0];
				}
				currency=currency-array[0]*50;
				array[1]=Math.floor(currency/25);
				if(array[1]>0)
				{
					result["Q"]=array[1];
				}
				currency=currency-array[1]*25;
				array[2]=Math.floor(currency/10);
				if(array[2]>0)
				{
					result["D"]=array[2];
				}
				currency=currency-array[2]*10;
				array[3]=Math.floor(currency/5);
				if(array[3]>0)
				{
					result["N"]=array[3];
				}
				currency=currency-array[3]*5;
				array[4]=currency;
				if(array[4]>0)
				{
					result["P"]=array[4];
				}
				
				return result;
			}
		}
}
