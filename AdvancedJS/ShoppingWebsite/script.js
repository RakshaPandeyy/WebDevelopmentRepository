async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    const productList = document.getElementById("productRow");

    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("col-4", "p-2");
      d.innerHTML = ` <div class="card border rounded shadow p-3">
              <div class="h-50 rounded-top">
                <img
                  src=${element.image}
                  alt=""
                  class="w-100 h-100 object-fit-contain rounded"
                />
              </div>
              <div class="h-50 p-2">
                <div class="fw-bold fs-5">${element.title}</div>
                <div class="fw-semibold">${element.rating.rate} / ${
        element.rating.count
      }</div>
                <div class="fw-bold fs-5">₹${element.price * 100}</div>
                <div class="mb-2">
                  ${element.description.slice(0, 50)}...
                </div>
                <div class = "d-flex gap-1">
                  <button class="btn btn-outline-primary">Add to cart</button
                  ><button class=" btn btn-primary">Buy now</button>
                </div>
              </div>
            </div>`;
      productList.appendChild(d);
    });
  } catch (error) {
    console.log;
  }
}

getProducts();
