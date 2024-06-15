// U63166005
// Coding Challenge #10

function main(){    // runs on html body loading

    d3.dsv(',','purchase_orders.csv',d3.autoType).then( //pulls CSV file and then runs function
    function(d){
        for (let index = 0; index < d.length; index++) {    //pull each line one by one
            const element = d[index];                       //creates an element for line from CSV file
            d3.select('uL')                                 //selects list in html file
                .append('li')                               //adds list item for each element
                .text(element.customerName + " - " + element.orderId + ": $" + element.purchaseAmount); //adds text to each list item
            }
        }
    )
}