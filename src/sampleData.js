
function getSampleItems() {
    let items = [
    {
        itemName: "Fossile Watch ",
        itemDescription: "Watch description",
        category: "Watches",
        price: "29", 
        location: "",
        sellerPhnNbr: "",
        sellerEmail: "",
        imageUrls: ["https://storage.cloud.google.com/ez_rentals/kp/Watch.jpeg"]

    }, 
    {
        itemName: "Flute",
        itemDescription: "My Flute",
        category: "Musical Instrument",
        price: "33", 
        location: "",
        sellerPhnNbr: "",
        sellerEmail: "",
        imageUrls: ["https://storage.cloud.google.com/ez_rentals/kp/flute.jpeg"]

    },{
        itemName: "Fridge",
        itemDescription: "My Fridge",
        category: "Refrigerator",
        price: "99", 
        location: "",
        sellerPhnNbr: "",
        sellerEmail: "",
        imageUrls: ["https://storage.cloud.google.com/ez_rentals/kp/fridge.jpg"]

    },{
        itemName: "Guitar",
        itemDescription: "",
        category: "Musical Instrument",
        price: "80", 
        location: "",
        sellerPhnNbr: "",
        sellerEmail: "",
        imageUrls: ["https://storage.cloud.google.com/ez_rentals/kp/guitar.jpeg"]

    },{
        itemName: "Chair",
        itemDescription: "",
        category: "Furniture",
        price: "15", 
        location: "",
        sellerPhnNbr: "",
        sellerEmail: "",
        imageUrls: ["https://storage.cloud.google.com/ez_rentals/kp/chair.jpg"]

    },{
        itemName: "Laptop",
        itemDescription: "",
        category: "Laptop",
        price: "10000", 
        location: "",
        sellerPhnNbr: "",
        sellerEmail: "",
        imageUrls: ["https://storage.cloud.google.com/ez_rentals/kp/laptop.jpg"]

    },  
    
    ];
 return items   

}

function  getSampleUser() {
   
    const testUser =  { userName: 'KP',
    firstName: 'Krishna', 
    middleName: 'Prasad',
    lastName: 'Patnaik',
    phoneNumber: '*****',
    emailId: '****@****', 
    location: {} };
    return testUser;
}

function  getBlankUser() {
   
    const testUser =  { userName: null,
    firstName: null, 
    middleName: null,
    lastName: null,
    phoneNumber: '*****',
    emailId: '****@****' };
    return testUser;
}

export {getSampleItems, getSampleUser, getBlankUser}