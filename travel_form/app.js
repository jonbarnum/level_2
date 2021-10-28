const form = document.passengerForm;

passengerForm.addEventListener('submit', function(event){
    event.preventDefault();
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    form.firstName.value = "";
    form.lastName.value = "";
    let age = form.age.value;
    form.age.value = "";
    let gender = form.gender.value;
    let location = form.city.value;
    let dietRestriction = []
    for (let i = 0; i < form.restriction.length; i++){
        if(form.restriction[i].checked){
            dietRestriction.push(form.restriction[i].value)
        }
    }
    alert(`
    First Name: ${firstName}
    Last Name: ${lastName}
    Age: ${age}
    Gender: ${gender}
    Location Flying: ${location}
    Dietary Restriction: ${dietRestriction}`);
})

