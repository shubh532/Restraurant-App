window.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:4000/getOder-data")
        .then((response) => {
            for (let i = 0; i < response.data.OderData.length; i++) {
                showData(response.data.OderData[i])
            }
        })
        .catch(err => {
            document.body.innerHTML += "<h6> SOMETHING WENT WRONG<h6>"
        })
})



const SubmitBtn = document.getElementById("submitBtn")
SubmitBtn.onclick = async (e) => {
    e.preventDefault()
    let OderData = {
        Price: document.forms["userform"]["Price"].value,
        Dish: document.forms["userform"]["Dish"].value,
        Table: document.forms["userform"]["Table"].value,
    }

    const response = await axios.post("http://localhost:4000/postOder-data", { ...OderData })

    showData(response.data.OderData)
}


function showData(data) {
    let details = `${data.price}-${data.dish}`
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(details))
    li.id = `${data.id}`
    let delBtn = document.createElement("button")
    delBtn.appendChild(document.createTextNode("Delete"))
    // document.getElementById("showUser").appendChild(delBtn)
    li.appendChild(delBtn)

    if (data.table === "Table1") {
        document.getElementById("Table1").appendChild(li)
        delBtn.onclick = () => deletehandler(data.id, "Table1",li)
    } else if (data.table === "Table2") {
        document.getElementById("Table2").appendChild(li)
        delBtn.onclick = () => deletehandler(data.id, "Table2",li)
    } else {
        document.getElementById("Table3").appendChild(li)
        delBtn.onclick = () => deletehandler(data.id, "Table3",li)
    }



}

async function deletehandler(id, table,li) {
    try {
        const response = await axios.delete(`http://localhost:4000/delete/${id}`)
        if (response.status === 200) {
            console.log(response)
            document.getElementById(table).removeChild(li)
        }
    } catch (err) {
        console.log(err)
    }
}