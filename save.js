//method to save data into localstorage
function save(){
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    //get last array to get last id
    //and store it into variable id
    var id
    contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0

    if(document.getElementById('id').value){

        //edit contactlist array based on value
        contactList.forEach(value => {
            if(document.getElementById('id').value == value.id){
                value.name      = document.getElementById('name').value, 
                value.age       = document.getElementById('age').value, 
                value.address   = document.getElementById('address').value, 
                value.phone     = document.getElementById('phone').value
            }
        });

        //remove hidden input
        document.getElementById('id').value = ''

    }else{

        //save
        //get data from form
        var item = {
            id        : id + 1, 
            name      : document.getElementById('name').value, 
            age       : document.getElementById('age').value, 
            address   : document.getElementById('address').value, 
            phone     : document.getElementById('phone').value
        }

        //add item data to array contactlist
        contactList.push(item)
    }

    // save array into localstorage
    localStorage.setItem('listItem', JSON.stringify(contactList))

    //update table list
    allData()

    //remove form data
    document.getElementById('form').reset()
}