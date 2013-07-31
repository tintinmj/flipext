	function myfunction() {
	    
	    var string = document.getElementById("mytextarea").value;
		
	    // process_input to process the input string :D
	    process_input(string);
	}




        function process_input(strings)
        {
        	// arrays to store the inverted unicode characters and english alphanumeric
            var flip_unicode = new Array("\u0250","\u0071","\u0254","\u0070","\u01DD","\u025F","\u0253","\u0265","\u0131","\u027E","\u029E","\u006C","\u026F","\u0075","\u006F","\u0064","\u0062","\u0279","\u0073","\u0287","\u006E","\u028C","\u028D","\u0078","\u028E","\u007A",
										"\u2200","\u10412","\u0186","\u15E1","\u018E","\u2132","\u2141","\u0048","\u0049","\u017F","\u22CA","\u2142","\u0057","\u004E","\u004F","\u0500","\u038C","\u1D1A","\u0053","\u22A5","\u2229","\u039B","\u004D","\u0058","\u2144","\u0020","\u000D");
            var characters = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y',' ','\n');
            
            var text = strings;
            var inverted_text = "";
    		
    		// a simple for loop for character look up..i could implement a dictionary look up..to increase efficiency
                for (var i = 0; i < text.length; i++) {
                    for(var j = 0; j < characters.length; j++) {
                        if (characters[j] == text.charAt(i)) {
                                inverted_text = inverted_text + (flip_unicode[j]);
                                break;
                        }
                    }     
                }

               // throwing back the inverted characters to the browser ..yeah simple java script ;)
                document.getElementById("mytextarea").value = inverted_text;
        }
