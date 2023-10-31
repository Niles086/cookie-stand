// sales data functions 

'use strict';

let hours = ['', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM' ];

//seattle sales data object
let seattle = {
    name: 'Seattle',
    //Customers, and cookies per hour estimated
    minCustomers: 23,
    maxCustomers: 65,
    aveCookie: 6.3,
    customersPerHour: [],
    cookieTotalPerHour: [],
    customerTotal: function () {
        this.customersPerHour.push(getRandomNumber(this.minCustomers, this.maxCustomers));
    },
    cookieTotal: function () {
        this.cookieTotalPerHour.push(this.aveCookie * this.customersPerHour[0])
    }
};
seattle.customerTotal();
seattle.cookieTotal();
console.log(seattle);
// Tokyo sales data

let tokyo = {
    name: 'Tokyo',
    //Customers, and cookies per hour estimated
    minCustomers: 3,
    maxCustomers: 24,
    aveCookie: 1.2,
    customersPerHour: [],
    cookieTotalPerHour: [],
    customerTotal: function () {
        this.customersPerHour.push(getRandomNumber(this.minCustomers, this.maxCustomers));
    },
    cookieTotal: function () {
        this.cookieTotalPerHour.push(this.aveCookie * this.customersPerHour[0])
    }
};
tokyo.customerTotal();
tokyo.cookieTotal();
console.log(tokyo);

// Dubai sales data
let dubai = {
    name: 'Dubai',
    //Customers, and cookies per hour estimated
    minCustomers: 11,
    maxCustomers: 38,
    aveCookie: 3.7,
    customersPerHour: [],
    cookieTotalPerHour: [],
    customerTotal: function () {
        this.customersPerHour.push(getRandomNumber(this.minCustomers, this.maxCustomers));
    },
    cookieTotal: function () {
        this.cookieTotalPerHour.push(this.aveCookie * this.customersPerHour[0])
    }
};
dubai.customerTotal();
dubai.cookieTotal();
console.log(dubai);

// Paris sales data
let paris = {
    name: 'Paris',
    //Customers, and cookies per hour estimated
    minCustomers: 20,
    maxCustomers: 38,
    aveCookie: 2.3,
    customersPerHour: [],
    cookieTotalPerHour: [],
    customerTotal: function () {
        this.customersPerHour.push(getRandomNumber(this.minCustomers, this.maxCustomers));
    },
    cookieTotal: function () {
        this.cookieTotalPerHour.push(this.aveCookie * this.customersPerHour[0])
    }
};
paris.customerTotal();
paris.cookieTotal();
console.log(paris);

// Paris sales data
let lima = {
    name: 'Lima',
    //Customers, and cookies per hour estimated
    minCustomers: 2,
    maxCustomers: 16,
    aveCookie: 4.6,
    customersPerHour: [],
    cookieTotalPerHour: [],
    customerTotal: function () {
        this.customersPerHour.push(getRandomNumber(this.minCustomers, this.maxCustomers));
    },
    cookieTotal: function () {
        this.cookieTotalPerHour.push(this.aveCookie * this.customersPerHour[0])
    }
};
lima.customerTotal();
lima.cookieTotal();
console.log(lima);


// Function creates stores sales hours
function salesHours(location) {
    for (let hour = 7; hour <= 20; hour++) {
        const randomCustomers = getRandomNumber(location.minCustomers, location.maxCustomers);
        const cookiesSold = Math.round(randomCustomers * location.aveCookie);
        location.cookieTotalPerHour.push(cookiesSold);
    }
}

// call for sales Hours function also sets seprate objects for location calls
salesHours(seattle);
salesHours(tokyo);
salesHours(dubai);
salesHours(paris);
salesHours(lima);



// random number generator
function getRandomNumber(min, max) {
    let num = max - min + 1;

    let randomFloat = Math.random() * num;
    let randomInt = Math.floor(randomFloat);

    let result = randomInt + min;

    return result;
}


let salesContainerElement = document.getElementById('salesDataByLocation');

function renderSales(localSales) {
    let h2 = document.createElement('h2');
    salesContainerElement.appendChild(h2);
    h2.textContent = localSales.name
    
    let ul = document.createElement('ul');
    salesContainerElement.appendChild(ul);
    
    let totalSold = 0;

    for (let i = 1; i < localSales.cookieTotalPerHour.length; i++) {
        let salesItem = document.createElement('li');
        ul.appendChild(salesItem);
        let cookiesSoldThisHour = localSales.cookieTotalPerHour[i];
        totalSold += cookiesSoldThisHour;
        let salesInfo = `${hours[i]} ${cookiesSoldThisHour}  cookies`;
        salesItem.textContent = salesInfo;
    }

    let totalItem = document.createElement('li');
    ul.appendChild(totalItem);
    let totalInfo = `Total: ${totalSold} cookies sold`;
    totalItem.textContent = totalInfo;
}


renderSales(seattle);
renderSales(tokyo);
renderSales(dubai);
renderSales(paris);
renderSales(lima);

