// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Declare function to build a table
function buildTable(data) {
    // Empty string when creating the table
    tbody.html("");

    // Add forEach Function to chain a for loop to our data
    data.forEach((dataRow) => {
        // create a variable that will append a row to the table
        let row = tbody.append("tr");
        // add code to loop through each field in the dataRow argument
        Object.values(dataRow).forEach((val) => {
            // append each value of the object to a cell in the table
            let cell = row.append("td");
            // Extract only the text of the value
            cell.text(val);
            }
        );
    });
}
