# cookie-stand

code 201 cookie stand lab

## These variables are used to create and display the sales data table for multiple cookie stand locations, along with their hourly and daily totals.

## This is a list of the variables I used in my code and their purposes:

1. **hours**: An array that stores the opening hours for the cookie stands.

1. **SalmonCookieStand: A constructor function for creating instances of cookie stands with properties like name, minimum customers, maximum customers, and average cookies per customer.

1. **seattle**, **tokyo**, **dubai**, **paris**, **lima**: Instances of the SalmonCookieStand constructor, each representing a specific cookie stand location (Seattle, Tokyo, Dubai, Paris, Lima) with its properties and data.

1. **getRandomNumber(min, max)**: A function that generates a random integer between min and max, used to simulate the number of customers.

1. **salesContainerElement**: A reference to an HTML element with the ID "salesDataByLocation" in which the sales data will be displayed.

1. **tableElem**: A dynamically created HTML _table_ element to display the sales data.

1. **headerRow**: A dynamically created table row (_tr_) for the table header.

1. **locationHeaderCell**: A dynamically created table header cell (_th_) for the "Location" column.

1. **hoursHeaderCell**: An array of dynamically created table header cells (_th_) for each hour column.

1. **totalsHeaderCell**: A dynamically created table header cell for the "Location Totals" column.

1. **dataRow**: A dynamically created table row for each location's data.

1. **locationDataCell**: A dynamically created table data cell (_td_) to display the location name.

1. **salesDataCell**: An array of dynamically created table data cells to display the number of cookies sold for each hour.

1. **dailyTotalCell**: A dynamically created table header cell to display the daily total for each location.

1. **hourlyTotalsRow**: A dynamically created table row for the "Hourly Totals" row.

1. **hourlyTotalsCell**: A dynamically created table header cell for the "Hourly Totals" column.

1. **hourlyTotalCell**: An array of dynamically created table header cells to display hourly totals for all locations.

1. **dataCells**: An array of references to all dynamically created table data cells for styling.

1. **totalForAllLocations**: A variable used to store the total number of cookies sold for all locations.

1. **extraCell**: A dynamically created table header cell to display the overall total of cookies sold for all locations.
