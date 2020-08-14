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
            if(surname.length <= 1 || surname.length >= 16){
                printError('surnameErr', "surname should be between 1 to 16 letters")
            } else {
                printError('surnameErr', "")
                surnameErr = false;
            }
        }

        //given name validation
        if(givenname === ""){
            printError('givenErr', "Field cant be empty")
        }else{
            if(givenname.length <= 1 || givenname.length >= 16){
                    printError('givenErr', "givenname should be between 1 to 16 letters")
            }else {
                printError('givenErr', "")
                givenErr = false;
            }
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
            if(residence.length <= 1 || residence.length >= 20){
                printError('resErr', "Residence should be between 1 to 20 letters")
            }else {
                printError('resErr', "")
                resErr = false;
            }
        }
        //occupation validation
        if(occupation=== ""){
            printError('occupErr', "Field cant be empty")
        }else{
            if(occupation.length <= 5 || occupation.length >= 50){
                printError('occupErr', "Occupation should be between 5 to 50 letters")
            }else {
                printError('occupErr', "")
                occupErr = false;
            }
        }
        //Nationality validation
        if(nationality === ""){
            printError('natErr', "Field cant be empty")
        }else{
            if(nationality.length <= 5 || nationality.length >= 20){
                printError('natErr', "Nationality should be between 5 to 20 letters")
            }else {
                printError('natErr', "")
                natErr = false;
            }
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


