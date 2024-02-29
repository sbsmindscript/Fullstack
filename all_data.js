 function allData(){
            
            table.innerHTML = ``
            //get data from localstorage and store to contaclist array
            //we must to use JSON.parse, because data as string, we need convert to array
            contactList = JSON.parse(localStorage.getItem('listItem')) ?? []
        
            //looping data and show data in table
            contactList.forEach(function (value, i){
               
                var table = document.getElementById('table')
        
                table.innerHTML += `
                    <tr>
                        <td>${i+1}</td>
                        <td>${value.name}</td>
                        <td>${value.age}</td>
                        <td>${value.address}</td>
                        <td>${value.phone}</td>
                        <td>
                            <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                                <i class="fa fa-edit"></i>
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-sm btn-danger" onclick="removeData(${value.id})">
                                <i class="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>`
            })
        }