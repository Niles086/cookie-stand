'use strict';

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

// Constructor function for Salmon Cookie Stand alwase use CAPITAL LETTER FOR 1ST LETTER
function SalmonCookieStand(name, minCustomers, maxCustomers, aveCookie) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.aveCookie = aveCookie;
    this.customersPerHour = [];
    this.cookieTotalPerHour = [];
    this.dailyTotal = 0;
}

// Method to calculate customers per hour
SalmonCookieStand.prototype.customerTotal = function () {
    for (let hour = 0; hour < hours.length; hour++) {
        this.customersPerHour.push(getRandomNumber(this.minCustomers, this.maxCustomers));
    }
};

// Method to calculate cookies per hour
SalmonCookieStand.prototype.cookieTotal = function () {
    for (let hour = 0; hour < hours.length; hour++) {
        this.cookieTotalPerHour.push(Math.round(this.aveCookie * this.customersPerHour[hour]));
        this.dailyTotal += this.cookieTotalPerHour[hour]; // Update daily total
    }
};

// Create instances using the constructor function
let seattle = new SalmonCookieStand('Seattle', 23, 65, 6.3);
let tokyo = new SalmonCookieStand('Tokyo', 3, 24, 1.2);
let dubai = new SalmonCookieStand('Dubai', 11, 38, 3.7);
let paris = new SalmonCookieStand('Paris', 20, 38, 2.3);
let lima = new SalmonCookieStand('Lima', 2, 16, 4.6);

// Call the customerTotal and cookieTotal methods
seattle.customerTotal();
seattle.cookieTotal();
tokyo.customerTotal();
tokyo.cookieTotal();
dubai.customerTotal();
dubai.cookieTotal();
paris.customerTotal();
paris.cookieTotal();
lima.customerTotal();
lima.cookieTotal();

// Random number generator
function getRandomNumber(min, max) {
    let num = max - min + 1;
    let randomFloat = Math.random() * num;
    let randomInt = Math.floor(randomFloat);
    let result = randomInt + min;
    return result;
}

// Element to contain sales data
let salesContainerElement = document.getElementById('salesDataByLocation');

// Create the table element
let tableElem = document.createElement('table');
salesContainerElement.appendChild(tableElem);

// Create the header row
const headerRow = document.createElement('tr');
tableElem.appendChild(headerRow);

// Add the header cell for "Location"
const locationHeaderCell = document.createElement('th');
headerRow.appendChild(locationHeaderCell);
locationHeaderCell.textContent = "Location";

// Add the header cells for each hour
for (let i = 0; i < hours.length; i++) {
    const hourHeaderCell = document.createElement('th');
    headerRow.appendChild(hourHeaderCell);
    hourHeaderCell.textContent = hours[i];
}

// Add the "Location Totals" header cell
const totalsHeaderCell = document.createElement('th');
headerRow.appendChild(totalsHeaderCell);
totalsHeaderCell.textContent = "Location Totals";

// Create the data rows for each location
for (let location of [seattle, tokyo, dubai, paris, lima]) {
    const dataRow = document.createElement('tr');
    tableElem.appendChild(dataRow);

    // Add the data cell for the location name
    const locationDataCell = document.createElement('td');
    dataRow.appendChild(locationDataCell);
    locationDataCell.textContent = location.name;

    // Add the data cells for each hour's sales
    let dailyTotal = 0; // Initialize daily total
    for (let i = 0; i < location.cookieTotalPerHour.length; i++) {
        const salesDataCell = document.createElement('td');
        dataRow.appendChild(salesDataCell);
        salesDataCell.textContent = location.cookieTotalPerHour[i];
        dailyTotal += location.cookieTotalPerHour[i]; // Update daily total
    }

    // Add the cell for the daily total
    const dailyTotalCell = document.createElement('th');
    dataRow.appendChild(dailyTotalCell);
    dailyTotalCell.textContent = dailyTotal;
}

// Add the "Hourly Totals" row
const hourlyTotalsRow = document.createElement('tr');
tableElem.appendChild(hourlyTotalsRow);

// Add the cell for "Hourly Totals"
const hourlyTotalsCell = document.createElement('th');
hourlyTotalsRow.appendChild(hourlyTotalsCell);
hourlyTotalsCell.textContent = "Hourly Totals";

// Calculate and add the hourly totals for all locations
let hourlyTotals = Array.from({ length: hours.length }, () => 0); // Initialize hourly totals array

for (let location of [seattle, tokyo, dubai, paris, lima]) {
    for (let i = 0; i < location.cookieTotalPerHour.length; i++) {
        hourlyTotals[i] += location.cookieTotalPerHour[i];
    }
}

// Add the data cells for each hour's hourly totals
for (let total of hourlyTotals) {
    const hourlyTotalCell = document.createElement('th');
    hourlyTotalsRow.appendChild(hourlyTotalCell);
    hourlyTotalCell.textContent = total;
}

// Set row borders for all data rows
for (let location of [seattle, tokyo, dubai, paris, lima]) {
    const dataRow = document.createElement('tr');
    tableElem.appendChild(dataRow);
    dataRow.style.borderBottom = "2px solid #000"; // 1px solid black border between rows
}

// Set cell borders for all data cells
const dataCells = document.querySelectorAll('td');
dataCells.forEach((cell) => {
    cell.style.border = "1px solid #000"; // 1px solid black border for cells
});
// Initialize a variable to store the total for all locations
let totalForAllLocations = 0;

for (let location of [seattle, tokyo, dubai, paris, lima]) {
    for (let i = 0; i < location.cookieTotalPerHour.length; i++) {
        totalForAllLocations += location.cookieTotalPerHour[i];
    }
}
// Add the extra cell
const extraCell = document.createElement('th');
hourlyTotalsRow.appendChild(extraCell);
extraCell.textContent = totalForAllLocations; 