import uuid from 'react-uuid'
const CustomerInfo = [
    { id : uuid(), firstName : "Eyuel", lastName : "Belay",  email : "eyuel.belay@se.com", address : { address : "Sponga 127-Stockholm, Sweden" ,  postalCode : "12744" }  },
    { id : uuid(), firstName : "John", lastName : "Smith", email : "john.smith@se.com", address : { address : "Lineaus 124-Vaxjo, Sweden" , postalCode : "16789" }},
    { id : uuid(), firstName : "Jafer", lastName : "Redi", email : "jafer.radi@se.com",  address : { address : "Lafto 130-Addis Ababa, Ethiopia" ,  postalCode : "25235" } },

]
export default CustomerInfo;