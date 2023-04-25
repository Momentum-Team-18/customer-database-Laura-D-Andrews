console.log(customers)

let directoryBox = document.querySelector('#directoryBox')
// let customerBox = document.querySelectorAll('.customerBox')

// let addCustomerBoxDiv = function



for (let customer of customers) {
    let customerCard = document.createElement('div');

// picture
    let customerPicture = document.createElement('img')
    customerPicture.src = customer.picture.large
    customerCard.appendChild(customerPicture)

// name
    let customerName = document.createElement('h1')
    customerName.innerText = `${customer.name.first} ${customer.name.last}`
    customerCard.appendChild(customerName)
    customerName.classList.add('custName')

// email
    let customerEmail = document.createElement('p')
    customerEmail.innerText = customer.email // singular thing so don't need template literal
    customerCard.appendChild(customerEmail); 
    customerEmail.classList.add('custEmail')

// address1
    let customerAddress = document.createElement('p')
    customerAddress.innerText = `${customer.location.street.number} ${customer.location.street.name} \n ${customer.location.city} ${customer.location.state} ${customer.location.postcode}`
    customerCard.appendChild(customerAddress); 
    customerAddress.classList.add('custInfo')
           
// DOB
    let customerDob = document.createElement('p')
    let formatDob = moment(customer.dob.date).format("MMM Do YY")
    customerDob.innerText = `DOB: ${formatDob}`
    customerCard.appendChild(customerDob)
    customerDob.classList.add('custInfo')

// customer since
    let customerSince = document.createElement('p')
    let formatSince = moment(customer.registered.date).format("MMM Do YY")
    customerSince.innerText = `Customer Since: ${formatSince}`
    customerCard.appendChild(customerSince)
    customerSince.classList.add('custInfo')


    directoryBox.appendChild(customerCard) // append customerCard to directoryBox at end
}

// create/declare a variable to represent the formatted date (let etc..)