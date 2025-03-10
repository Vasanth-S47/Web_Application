function fetchTickets() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "ticketservlet", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);

            document.getElementById("ticketCount").innerText = response.available;
            document.getElementById("userTickets").innerText = response.userTickets;
            document.getElementById("totalPrice").innerText = response.totalPrice;

            document.getElementById("cancelBtn").disabled = response.userTickets === 0;
        }
    };

    xhr.send();

}


document.getElementById("bookBtn").addEventListener("click", function() {
    let qty = document.getElementById("ticketQty").value;

    if (qty.trim() === "" || qty <= 0) {
        document.getElementById("result").innerHTML = `<p style="color:red;">Enter a valid quantity!</p>`;
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "ticketservlet?action=bookTickets", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("result").innerHTML = xhr.responseText;
            fetchTickets();
        }
    };

    xhr.send("qty=" + qty);
});

document.getElementById("cancelBtn").addEventListener("click", function() {
    let qty = document.getElementById("ticketQty").value;

    if (qty.trim() === "" || qty <= 0) {
        document.getElementById("result").innerHTML = `<p style="color:red;">Enter a valid quantity for cancellation!</p>`;
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "ticketservlet?action=cancelTickets", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("result").innerHTML = xhr.responseText;
            fetchTickets();
        }
    };

    xhr.send("qty=" + qty);
});


setInterval(fetchTickets, 5000);


fetchTickets();
