function showDetails(product) {
    var modalContent = document.getElementById("modalContent");
    var modal = document.getElementById("detailsModal");
    
    // You can load details dynamically based on the product clicked
    switch (product) {
        case 'product1':
            modalContent.innerHTML = "<div class='pt'><div><img src='product1.jpeg' alt='iPhone 15' class='img'></div><div><h2>iPhone 15</h2><p>Title:iPhone \r\n Price:85000 \r\n Description:brand for sequrity \r\n Rating:5.0</p></div></div>";
            break;
        case 'product2':
            modalContent.innerHTML = "<div class='pt'><div><img src='product2.jpg' alt='Nike Shoe' class='img'></div><div><h2>Nike shoes</h2><p>Title:Nike Shoe \r\n Price:4000 \r\n Description:comfort is super\r\n Rating:4.0</p></div></div>";
            break;
        case 'product3':
            modalContent.innerHTML = "<div class='pt'><div><img src='product3.jpg' alt='Puma bag' class='img'></div><div><h2>Puma bag</h2><p>Title:Puma Bag \r\n Price:3000 \r\n Description:easy to handle\r\n Rating:4.5</p></div></div>";
            break;
    }
    
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("detailsModal");
    modal.style.display = "none";
}
