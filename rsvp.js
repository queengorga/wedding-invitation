function formValidation() 
{
    
    var firstname = document.registration.first_name;
    var lastname = document.registration.last_name;
    var uemail = document.registration.email;
    var gattend = document.registration.guest_attend;
    var gname = document.registration.guest_name;
    var gmenu = document.registration.guest_menu;
    
        
        if (allLetter(fname)) {
        if (allLetter(lname)) {
        if (ValidateEmail(uemail)) {
        if (attendselect(gattend)) {
        if (allleter(gname)) {
        if (menuselect(gmenu)) {
                                }
                            }
                        }
                    }
                }
            }
    
    return false;
}

function allLetter(fname) {
    var letters = /^[A-Za-z]+$/;
    if (fname.value.match(letters)) {
        return true;
    }
    else {
        alert('First must have alphabet characters only');
        fname.focus();
        return false;
    }
}

function attendselect(gattend) {
    if (gattend.value == "Default") {
        alert('Select your country from the list');
        gattend.focus();
        return false;
    }
    else {
        return true;
    }
}

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}