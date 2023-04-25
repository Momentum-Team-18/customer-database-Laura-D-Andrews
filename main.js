console.log(customers)

let directoryBox = document.querySelector('#directoryBox')

// build a container for each customer and populate it with just their name


// create div for each customer card - add to existing loop for all other data

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
    customerEmail.classList.add('custInfo')

// address
    let customerAddress = document.createElement('p')
    customerAddress.innerText = `${customer.location.street.number} ${customer.location.street.name} ${customer.location.city} ${customer.location.state} ${customer.location.postcode}`
    customerCard.appendChild(customerAddress); 
    customerAddress.classList.add('custInfo')

// DOB
    let customerDob = document.createElement('p')
    customerDob.innerText = `DOB: ${customer.dob.date}`
    customerCard.appendChild(customerDob)
    customerDob.classList.add('custInfo')

// customer since
    let customerSince = document.createElement('p')
    customerSince.innerText = `Customer Since: ${customer.registered.date}`
    customerCard.appendChild(customerSince)
    customerSince.classList.add('custInfo')


    directoryBox.appendChild(customerCard) // append customerCard to directoryBox at end
}

