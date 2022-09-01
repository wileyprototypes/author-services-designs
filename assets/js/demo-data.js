

//
// the data
//

let data =
    '{"stuartAllen":{"email":"test@gmail.com","articleTitle":"The Best Article","journalTitle":"Journal of Cool Stuff","firstName":"Stuart","lastName":"Allen"},"mitchMurder":{"email":"mitch@gmail.com","articleTitle":"Another great article","firstName":"Mitch","lastName":"Murder"}}';
const obj = JSON.parse(data);

//
// populate placeholders with demo dataKey
//

// get URL
var searchParams = new URLSearchParams(document.location.search);
userid = searchParams.get("userid");
console.log("userid = " + userid);

//
// update all links with search query searchParams
//

[...document.querySelectorAll('a')].forEach(e => {
    //add window url params to to the href's params
    const url = new URL(e.href);
    console.log(url);
    for (let [k, v] of new URLSearchParams(window.location.search).entries()) {
        url.searchParams.set(k, v)
    }
    e.href = url.toString();
});

//get all data element placeholders
const dataPlaceholders = document.getElementsByClassName("demo-data");
//for each data element placeholder
for (let i = 0; i < dataPlaceholders.length; i++) {
    // get the data key
    var dataKey = dataPlaceholders[i].getAttribute("demo-data");
    // evaluate the key's value
    let keyValueConstruct = "obj." + userid + "." + dataKey;
    let keyValue = eval(keyValueConstruct);
    // if the key has a value, then update the placeholder
    if (keyValue) {
        // construct the function to replace the placeholder
        let construct = "dataPlaceholders[i].innerHTML = obj." + userid + "." + dataKey;
        // evaluate the function to replace the placeholder
        let result = eval(construct);
        // return the key-value pair in the console for debugging
        console.log(dataKey + " = " + keyValue)
    }
};
