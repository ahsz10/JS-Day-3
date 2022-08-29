////////// Part 1 //////////

// Task 1
function login(){
    let usr,pswd;
    const authUsr= "admin";
    const authPswd= "421$$";
    while(true){
        usr= window.prompt("Enter username: ");
        pswd= window.prompt("Enter password: ");
        if(usr === authUsr ){ //&& psd === authPswd
            //console.log("User In");
            if(pswd === authPswd){
                alert("Welcome login success");
                break;
            }else{
                alert("Incorrect username or password. Please try again");
            }
        }else{
            //console.log(usr + "  "+ psd)
            alert("Incorrect username or password. Please try again");
        }
    }
}

// Task 2 and Bonus
function calc(){
    let num1,num2,opr,result=0,addOpr,i=0,x=i+1;
    do{
        if(i == 0){
            num1= parseInt(window.prompt("Enter first number: "));
        }
        opr = window.prompt("Enter the operation you want to apply: ");
        num2= parseInt(window.prompt("Enter second number: "));
        if(opr == "+" || opr == "sum" || opr.includes("+")){
            result= num1+num2;
            //alert("The result is "+result);
        }else if(opr == "-" || opr == "subtract" || opr == "sub" || opr.includes("-")){
            result= num1-num2;
            // alert("The result is "+result);
        }else if(opr == "x" || opr == "multi" || opr == "*" || opr.includes("x") || opr.includes("*")){
            result= num1*num2;
            // alert("The result is "+result);
        }else if(opr == "/" || opr == " division" || opr == "div" || opr.includes("/")){
            result= num1/num2;
            // alert("The result is "+result);
        }else if(opr == "%" || opr == "moduls" || opr == "mod" || opr.includes("%")){
            result= num1%num2;
            // alert("The result is "+result);
        }else{
            alert("Invaild operation input");
        }

        i++;
        addOpr= window.prompt("The result is "+result+"\nIf you want to do a new operation on the previous result enter \"Y\" or \"Yes\"");
        let addOprLower= addOpr.toLowerCase(addOpr);
        if(addOprLower === "y" || addOprLower === "yes"){
            num1=result;
            x+=1;
        }
    }while(i<x)
}

////////// Part 2 //////////

// Task 1
function calcSumAvg(){
    const size= parseInt(window.prompt("Enter how many numbers you want to get the sum of: "));
    var arr= new Array();
    let sum=0, avg=0;

    for(let i =0;i<size;i++){
        arr.push(parseInt(window.prompt("Enter number ")));
    }

    for(let i =0;i<size;i++){
        // console.log(i+") "+arr[i]);
        sum +=arr[i];
    }
    avg= sum/arr.length;
    alert("The sum of the entered values is "+sum+" and their average is "+avg);
    //console.log(arr.length);
}

// Task 2 
var contactsBook= new Array();
// console.log(contactsBook);
// console.log(typeof(contactsBook))

function addContact(name, number){
    let person = new Object();
    person.pName= name;
    person.pNumber= number;
    contactsBook.push(person);
}

function searchBook(ref){
    let refLower = ref.toLowerCase();
    for(let i=0;i<contactsBook.length;i++){
        if(contactsBook[i].pName === refLower || contactsBook[i].pNumber === refLower){
            return i;
        }
    }
    return -1;
}

function phoneBook(){
    while(true){
        let usrInput= window.prompt("What operation do you want to do?\n "
                                +"(Add new contact or Search for a contact)");
        let usrInputLower= usrInput.toLowerCase();

        if (usrInputLower.includes("add") || usrInputLower === "add"){
            const contactName= window.prompt("Enter the Contact Name");
            const contactNumber= window.prompt("Enter the Contact Phone Number");
            addContact(contactName,contactNumber);
            alert("Contact added ")
        }else if (usrInputLower.includes("search") || usrInputLower === "search"){
            const searchInput= window.prompt("Enter the Name or Number of the contact you want");
            var index=searchBook(searchInput);
            if(index < 0){
                alert("Contact not found. Please try again");
            }else{
                alert("Found Contact \nName: "+contactsBook[index].pName+"\nPhone Number: "+contactsBook[index].pNumber);
            }
        }else{
            alert("Invaild operation input. Please try again");
        }
    }
}


// Bonus
function areaCalc(){
    const pi = 22/7;
    let flag = false;
    let area;
    let shape= window.prompt("Enter the shape name to calculate its area: \n"
                            +"Shapes: Circle, Triangle, Square, Rectangle, Parallelogram, Trapezium or Ellipse");
    let shapeLower= shape.toLowerCase();
    if(shapeLower === "circle"){
        const r= parseInt(window.prompt("Enter the circle's raduis "));
        area = pi * r * r;
    }else if(shapeLower === "triangle"){
        const b= parseInt(window.prompt("Enter the triangle's base"));
        const h= parseInt(window.prompt("Enter the triangle's height"));
        area = (0.5) * b * h;
    }else if(shapeLower === "square"){
        const a= parseInt(window.prompt("Enter the square's side length"));
        area = a * a;
    }else if(shapeLower === "rectangle"){
        const l= parseInt(window.prompt("Enter the rectangle's length"));
        const w= parseInt(window.prompt("Enter the rectangle's width"));
        area = l * w;
    }else if(shapeLower === "parallelogram"){
        const b= parseInt(window.prompt("Enter the parallelogram's base"));
        const vh= parseInt(window.prompt("Enter the parallelogram's vertical height"));
        area = b * vh;
    }else if(shapeLower === "trapezium"){
        alert("The next two input are the length of parrallel sides");
        const a= parseInt(window.prompt("Enter the trapezium's side "));
        const b= parseInt(window.prompt("Enter the trapezium's side that is parrallel to the first input"));
        const h= parseInt(window.prompt("Enter the trapezium's height"));
        area = ((0.5)*(a+b)) * h;
    }else if(shapeLower === "ellipse"){
        const a= (0.5) * parseInt(window.prompt("Enter the ellipse's minor axis"));
        const b= (0.5) * parseInt(window.prompt("Enter the ellipse's major axis"));
        area = pi * a * b;
    }else{
        flag= true;
        alert("Invaild shape name. Please try again");
    }

    if(flag === false){
        alert("The area of the "+ shape + " is "+ area);
    }
}

////////// Calling Tasks Funtions //////////

////////// Part 1 //////////
// Task 1
// login();

// Task 2 and Bonus
//calc();

////////// Part 2 //////////
// Task 1
// calcSumAvg();

// Task 2
//phoneBook();

// Bonus
// areaCalc();