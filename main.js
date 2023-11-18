const shoppingCart = document.getElementById("container");
const items = shoppingCart.getElementsByClassName("box");
const totalPrice = document.getElementById("total-cost");

let total = 0;

for (let i = 0; i < items.length; i++) {
    // Perform operations on each item, e.g., extract price and update total
    // For example, if each item has a "price" class:
    const itemPrice = parseFloat(items[i].getElementsByClassName("price")[0].innerText);
    total += itemPrice;
} {
  const item = items[i];
  const minus = item.getElementsByClassName("minus")[0];
  const plus = item.getElementsByClassName("plus")[0];
  const quantityInput = item.getElementsByTagName("input")[0];
  const deleteBtn = item.getElementsByClassName("delete-btn")[0];
  
  const price = parseInt(
    item.getElementsByClassName("price")[0].innerText.substring(1)
  );

  minus.addEventListener("click", () => {
    if (quantityInput.value > 1) {
      quantityInput.value--;
      total -= price;
      totalPrice.innerText = `Total Price: $${total}`;
    }
  });

  plus.addEventListener("click", () => {
    quantityInput.value++;
    total += price;
    totalPrice.innerText = `Total Price: $${total}`;
  });

  deleteBtn.addEventListener("click", () => {
    item.remove();
    total -= price * quantityInput.value;
    totalPrice.innerText = `Total Price: $${total}`;
  });

          total += price * quantityInput.value;
          totalPrice.innerText = "Total Price: $${total}";
        }

        $(".heart.fa").click(function() {
          $(this).toggleClass("fa-heart fa-heart-o");
        });