let directoryBox = document.querySelector("#directoryBox");

for (let customer of customers) {
  let customerCard = document.createElement("div");
  customerCard.style.border = "2px solid #D8DBE2";
  customerCard.style.padding = "5px";
  customerCard.style.display = "flex";
  customerCard.style.flexDirection = "column";
  customerCard.style.alignItems = "center";
  customerCard.style.margin = "5px";

  // picture
  let customerPicture = document.createElement("img");
  customerPicture.src = customer.picture.large;
  customerCard.appendChild(customerPicture);

  // name
  let customerName = document.createElement("h1");
  customerName.innerText = `${customer.name.first} ${customer.name.last}`;

  let firstSlice = `${customer.name.first.slice(1, 9)}`;
  let firstCapital =`${customer.name.first.slice(0, 1).toUpperCase()}` + firstSlice;
  let lastSlice = `${customer.name.last.slice(1, 9)}`;
  let lastCapital =`${customer.name.last.slice(0, 1).toUpperCase()}` + lastSlice;
  customerName.innerText = `${firstCapital} ${lastCapital}`;

  customerCard.appendChild(customerName);
  customerName.classList.add("custName");

  // email
  let customerEmail = document.createElement("p");
  customerEmail.innerText = customer.email;
  customerCard.appendChild(customerEmail);
  customerEmail.classList.add("custEmail");

  // address
  let customerAddress = document.createElement("p");
  let formatState = nameToAbbr(customer.location.state);
  customerAddress.innerText = `${customer.location.street.number} ${customer.location.street.name} \n 
  ${customer.location.city} ${formatState} ${customer.location.postcode}`;
  customerCard.appendChild(customerAddress);
  customerAddress.classList.add("custInfo");

  // dates
  let customerDates = document.createElement("p");
  let formatDob = moment(customer.dob.date).format("MMM Do YY");
  let formatSince = moment(customer.registered.date).format("MMM Do YY");
  customerDates.innerText = `DOB: ${formatDob} \n Customer Since: ${formatSince}`;
  customerCard.appendChild(customerDates);
  customerDates.classList.add("custInfo");


  directoryBox.appendChild(customerCard);
}
