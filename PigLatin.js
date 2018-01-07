function hi()
{

	var userinput = document.getElementById("inputfield").value;
	var limit = userinput.length;
	var resultbegin ="";
	var resultend = "";
	var result = "";
	var foundvowel = "no";
	var add = "end"
	var i = 0;


		while (i < limit)
		{

			if (foundvowel == "no")
			{
				if(userinput.charAt(i) == 'a' || userinput.charAt(i) == 'e' || userinput.charAt(i) == 'i' || userinput.charAt(i) == 'o' || userinput.charAt(i) == 'u' || userinput.charAt(i) == 'y')
				{
				add = "begin";
				foundvowel = "yes";
				}
			}
			if (add =="end")
			{
				resultend += userinput.charAt(i);
			}
			else
			{
				resultbegin += userinput.charAt(i);
			}

			i++;
		}

	result = resultbegin + resultend + "ay";
	document.getElementById("result").innerHTML = result;
}

