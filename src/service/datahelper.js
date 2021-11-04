import haversineDistance from "haversine-distance"


function sortData(items, sortBy, order, location) {
    let allitems = [...items]
    if (sortBy === 'price') {

        let sortedItems = allitems.sort((item1, item2) => {
            if (order === 'asc')
            return Number(item1.price) - Number(item2.price)
            else return Number(item2.price) - Number(item1.price)
         })
         return sortedItems;

    }
    if (sortBy === 'rent') {

        let sortedItems = allitems.sort((item1, item2) => {
            if (order === 'asc')
            return Number(item1.rent) - Number(item2.rent)
            else return Number(item2.rent) - Number(item1.rent)
         })
         return sortedItems;

    }
    if (sortBy === 'location') {
        let sortedItems = allitems.sort((item1, item2) => {
            let d1 = haversineDistance(item1.coordinates, location);
            let d2 = haversineDistance(item2.coordinates, location)
            
            if (order === 'asc')
            return d1-d2;
            else return d2-d1;
            
         })
         return sortedItems;
    }
    return allitems;
    
}


export { sortData};