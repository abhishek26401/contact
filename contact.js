
window.onload = function(){
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    // const cpassword = document.getElementById('cpassword');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    // const chkbox = document.getElementById('chkbox');
    const whatsapp = document.getElementById('whatsapp');
   
    }
    
    var genderS = document.getElementsByName('gender');
    for (var i = 0, length = genderS.length; i < length; i++) {
        if (genderS[i].checked) {
          var gen = genderS[i].value;
          break;
        }
      }
    
    //more email validate
    const isEmail = (emailVal) => {
        var atSymbol = emailVal.indexOf('@');
        if(atSymbol < 1) return false;
        var dot = emailVal.lastIndexOf('.');
        if(dot <= atSymbol + 2) return false;
        if(dot === emailVal.length - 1) return false;
        return true;
    }
    
    
    // username
    const usernamev = () => {
        const usernameVal = username.value.trim();
        if(usernameVal === "") {
            setErrorMsg(username, 'username cannot be blank');
            
        } else if (!/^[a-zA-Z]*$/g.test(usernameVal) ) {
            setErrorMsg(username, 'only alphabets allow');
        } else if (usernameVal.length >= 15 ) {
            setErrorMsg(username, 'username max 15 char');
        } else if (!(/^\S{1,}$/.test(usernameVal))) {
            setErrorMsg(username, 'Name cannot contain whitespace');
    
        }else{
            setSuccessMsg(username);
        }
      
        const str = usernameVal;
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        document.getElementById("username").value = str2
    }
    
    
    
    
    //email
    const emailv = () => {
        const emailVal= email.value.trim();
        if(emailVal === "") {
            setErrorMsg(email, 'email cannot be blank');
        } else if (!isEmail(emailVal)) {
            setErrorMsg(email, 'Not a valid Email');
        } else if (emailVal.length >= 25) {
            setErrorMsg(email, 'email max 25 char');
        }
        else{
            setSuccessMsg(email);
        } 
    }
    
        //phone
    const phonev = () => {
        const phoneVal = phone.value.trim();   
        if(phoneVal === "") {
            setErrorMsg(phone, 'phone number cannot be blank');
        } else if (phoneVal.length != 10) {
            setErrorMsg(phone, 'Not a valid phone number');
        }else{
            setSuccessMsg(phone);
        }
    }
    





            //Whatsapp no
            // const passwordv = () => {
            function whatsappv() {
                const whatsappVal = whatsapp.value.trim();   
                if(whatsappVal === "") {
                    setErrorMsg(whatsapp, 'phone number cannot be blank');
                } else if (whatsappVal.length != 10) {
                    setErrorMsg(whatsapp, 'Not a valid phone number');
                }else{
                    setSuccessMsg(whatsapp);
                }
            }


    
       //validate gender
    const genderv = () => {
        if ( ( male.checked == false ) && ( female.checked == false ) ){
            setErrorMsg(female,'please select gender');
        }else{
            setSuccessMsg(male);
        }
    }
     
    

    
    const sendData = (usernameVal,emailVal,phoneVal,whatsappVal,gen, sRate, count) => {
        if (sRate === count){
    
    
    
            Swal.fire({
                title: ''+usernameVal+ "   " ,
                icon: 'info',
                html:
                  ' <b>Email - </b>   ' + emailVal +'  <br>  <b>Phone No. - </b>  ' +phoneVal + '  <br>  <b>Whatsapp No. - </b>  ' +whatsappVal +' <br>  <b> Gender - </b>  ' +gen ,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Save',
                footer: '<b>Please check all details.</b> '
                
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Saved Successfully',
                    'Added'+
                    ' <br> <b> To contact</b>',
                    'success'
                  )
                }
  
              });
        }
    }
    
    //for final data validation
    const successMsg = (usernameVal,emailVal,phoneVal,whatsappVal,gen) => {
        let formCon = document.getElementsByClassName('form-control');
        var count = formCon.length - 1;
        for(var i = 0; i < formCon.length; i++){
            if(formCon[i].className === "form-control success") {
                var sRate = 0 + i;
                console.log(sRate);
                sendData(usernameVal,emailVal,phoneVal,whatsappVal,gen, sRate, count);
            }else{
                return false;
            }
        }
        resetForm()
    }
 
    
    function validate() {
        
    
        const usernameVal = username.value.trim();
        // const cpasswordVal = cpassword.value.trim();
        const emailVal= email.value.trim();
        const phoneVal = phone.value.trim();    
        const whatsappVal = whatsapp.value.trim();
       
        var genderS = document.getElementsByName('gender');
        for (var i = 0, length = genderS.length; i < length; i++) {
            if (genderS[i].checked) {
              
              var gen = genderS[i].value;
              break;
           
            }
          }
      
       
        usernamev()
        emailv();
        phonev();
        whatsappv();
        // cpasswordv();
        // chkboxv();
        genderv();

        successMsg(usernameVal,emailVal,phoneVal,whatsappVal,gen);
        
    }
    
    function setErrorMsg(input,errormsgs) {
        
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className= "form-control error";
        small.innerText = errormsgs;
    }
    function setSuccessMsg(input) {
        const formControl = input.parentElement;
        formControl.className= "form-control success";
    }
    
    
    
    function resetForm() {
       
        document.getElementById("form").reset();
      
    
        const boxes = document.querySelectorAll('.form-control');
      
    
        boxes.forEach(box => {
          // ✅ Remove class from each element
          box.classList.remove('success');
        });
    }
    
  
    
   
    