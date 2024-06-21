const storeOwners = [
    {name: 'Danny Shavez', stores: 1, location: "AX"},
    {name: 'Dana Shavez', stores: 1, location: "NM"},
    {name: 'Dale Shavez', stores: 1, location: "NM"}
];

const listNumbersOfStores = function () {
    let totalLocations = 0;
    for(let i = 0; i <storeOwners.length; i++) {
        totalLocations += storeOwners[i].stores;
    }
    return totalLocations;
}

function tellMeMyStores() {
    let locations = listNumbersOfStores();
    console.log('Hey can you tell me how many stores you have?');
    if(locations > 0) {
        console.log(`You have ${locations} stores.`);    
    }
}

function hasStore(person, location) {
    for(let i = 0; i < storeOwners.length; i++) {
        if(storeOwners[i].name === person) {
            console.log(`Yes, ${person} has one in ${location}`);
            return true;
        }
    }
    return false;
}

tellMeMyStores();
hasStore('Danny Shavez', 'NM');