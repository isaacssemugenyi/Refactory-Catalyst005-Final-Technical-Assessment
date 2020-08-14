function printError(elemId, msg){
    document.getElementById(elemId).innerHTML = msg;
}

function success(elemId, msg){
    document.getElementById(elemId).innerHTML = msg;
}

// const form = document.getElementById('designform')

// form.addEventListener('submit', (e)=>{
    function validate(){
        const surname = document.getElementById('surname').value;
        const givenname = document.getElementById('givenname').value;
        const dob = document.getElementById('dateofbirth').value;
        const residence = document.getElementById('residence').value;
        const occupation = document.getElementById('occupation').value;
        const nationality = document.getElementById('nationality').value;
        // const gender1 = document.getElementById('gender1').value;
        // const gender2 = document.getElementById('gender2').value;
        const category = document.getElementById('category').value;

        var surnameErr = true;
        var givenErr = true;
        var birthErr = true;
        var resErr = true;
        var occupErr = true;
        var natErr = true;
        // const genderErr = true;
        var catErr = true;

        //surname validation
        if(surname === ""){
            printError('surnameErr', "Field cant be empty")
        }else{
            printError('surnameErr', "")
            surnameErr = false;
        }

        //given name validation
        if(givenname === ""){
            printError('givenErr', "Field cant be empty")
        }else{
            printError('givenErr', "")
            givenErr = false;
        }
        //date of birth validation
        if(dob === ""){
            printError('birthErr', "Field cant be empty")
        }else{
            printError('birthErr', "")
            birthErr = false;
        }
        //residence validation
        if(residence === ""){
            printError('resErr', "Field cant be empty")
        }else{
            printError('resErr', "")
            resErr = false;
        }
        //occupation validation
        if(occupation=== ""){
            printError('occupErr', "Field cant be empty")
        }else{
            printError('occupErr', "")
            occupErr = false;
        }
        //Nationality validation
        if(nationality === ""){
            printError('natErr', "Field cant be empty")
        }else{
            printError('natErr', "")
            natErr = false;
        }
        //Category validation
        if(category === ""){
            printError('catErr', "Field cant be empty")
        }else{
            printError('catErr', "")
            catErr = false;
        }

        if((surnameErr || givenErr || birthErr || resErr || occupErr || natErr || catErr) === true){
            return false;
            // e.preventDefault();
        } else {
            if((surnameErr && givenErr && birthErr && resErr && occupErr && natErr && catErr) === false){
                success('better', 'Registration was successful');
                return true;
                // e.currentTarget.submit();
            }
        }
     
}
// })


