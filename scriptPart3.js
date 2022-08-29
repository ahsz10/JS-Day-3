////////// Part 3 //////////

// Ex 1 Predefined Objects Methods
/*
    # For Window Object 
        * prompt("string")  
            - Displays a prompt containing a string as an instruction or description on what to enter.
            - Return the user input  as a string or returns null in case the user didn't enter an input
        
        * alert("string")
            - Displays an alert containing the string as text 

    # For Date Object
        * getDate()
            - Returns the day of the month

        * getHours()
            - Returns the hours 

        * getYear()
            - Returns the year

    # For String Object
        * toLowerCase()
            - Returns the calling string value converted to lower case

        * toUpperCase()
            - Returns the calling string value converted to upper case
            
        * indexOf(char)
            - Returns the first index of the given character else returns -1 if no such character

        * charAt(index)	
            - Returns the character in the string at given index

        * parseInt(string) 
            - Returns the string converted to an integer in base of 10
        
        * includes(string) 
            - Returns true if a string contains a specified string else it returns false
            - Case sensitive method

        * replace(search,new)
            - Searches a string for a value then returns a new string with the value replaced
        
        * length()
            - Returns the length of the string

*/ 

// Ex 2 Predefined Array Methods

/*
 # Array Methods
        * concat(arg0,agr1,...)
            - Creates a new array that includes values from other arrays and additional items

        * forEach()
            - Allows to run a function for every element of the array
            
        * sort()
            - Returns the sorted array

        * reverse()
            - Returns the order of the elements in the array reversed

        * push(item)
            - Adds item(s) to the end of the array(append)
        
        * pop()
            - Remove an item from the end of the array

        * shift()
            - Remove an item from the begining of the array
        
        * unshift(item)
            - Adds item(s) to the begining of the array

        * slice(start,end)
            - returns a new array copying to it all items from index start to end (excluding the end value)

        * length
            - Returns the length of the array
        
        * tostring()
            - Returns the array values as a string separated with commas
        
*/

// Ex 3 

function first(x) {  
    var result = function second(y) { // inner funxtion(closure) 
      return x + y;
    }
    return result;
}



/* 
    # Closure 
        - Gives access to the variables outside the scope to be accessed

    # Lexical Environment
        - Is a specification type used to define the association of Identifiers 
        to specific variables and functions
*/ 

////////// Calling Tasks Funtions //////////

// Ex3
// let finalResult= first("Ahmed")("Samy");
// let finalResult= first(2)(5);
// console.log(finalResult);


