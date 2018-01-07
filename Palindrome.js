function bye()
{
	var userinput = document.getElementById("inputfield").value;
	var j = userinput.length-1; 
	var i = 0;
	result = "";

while(i <= j)
{
	
if(userinput.charAt(i) == userinput.charAt(j))
	{
	result = "That word's a palindrome";
	
	}
else{
	result= "That word's not a palindrome";

	break;

	}
	i++;
	j--;
}
	document.getElementById("result").innerHTML = result; 
}




	