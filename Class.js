class Customer {
  orders = [];
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  addOrder(order) {
    this.orders.push(order);
  }
}

class Order {
  payment = null;
  orderDetails = [];
  constructor(date, status) {
    this.date = date;
    this.status = status;
  }

  calcSubTotal() {
    let subTotal = 0;
    for (i = 0; i < this.orderDetails.length; i++) {
      subTotal += this.orderDetails[i].subTotal();
    }
    return subTotal;
    // return this.orderDetails.reduce(
    //   (total, orderDetail) => total + orderDetail.subTotal(),
    //   0
    // );
  }
  calcTax() {
    let tax = 0;
    for (i = 0; i < this.orderDetails.length; i++) {
      tax += this.orderDetails[i].calcTax();
    }
    return tax;
  }
  calcTotal() {
    return this.calcSubTotal() + this.calcTax();
  }
  calcTotalWeight() {
    let weight = 0;
    for (i = 0; i < this.orderDetails.length; i++) {
      weight += this.orderDetails[i].calcTotalWeight();
    }
    return weight;
  }
  addPayment(payment) {
    this.payment = payment;
  }
  addOrderDetail(orderDetail) {
    this.orderDetails.push(orderDetail);
  }
}

class OrderDetail {
  item = null;
  constructor(quantity, taxStatus) {
    this.quantity = quantity;
    this.taxStatus = taxStatus;
  }

  calcSubTotal() {
    return this.item.getPriceForQuantity(this.quantity) + this.calcTax();
  }
  calcWeight() {
    return this.item.shippingWeight;
  }
  calcTax() {
    return this.item.getTax(this.taxStatus);
  }
  addItem(item) {
    this.item = item;
  }
}

class Item {
  inStock = true;
  constructor(shippingWeight, description, price) {
    this.shippingWeight = shippingWeight;
    this.description = description;
    this.price = price;
  }

  setInstock(status) {
    this.inStock = status;
  }

  getPriceForQuantity(quantity) {
    return this.price * quantity;
  }
  getTax(taxStatus) {
    if (taxStatus == "Tax included") {
      return 0;
    } else {
      return 0.07 * this.price;
    }
  }
  inStock() {
    return this.inStock;
  }
}

class Payment {
  constructor(amount) {
    this.amount = amount;
  }
}

class Cash extends Payment {
  constructor(amount, cashTendered) {
    super(amount);
    this.cashTendered = cashTendered;
  }
}

class Check extends Payment {
  constructor(amount, name, bankID) {
    super(amount);
    this.name = name;
    this.bankID = bankID;
  }

  authorized() {
    console.log("456");
  }
}

class Credit extends Payment {
  constructor(amount, number, type, expDate) {
    super(amount);
    this.number = number;
    this.type = type;
    this.expDate = expDate;
  }

  authorized() {
    console.log("789");
  }
}

// // สร้างตัวแปร
// const oldMain = () => {
//   let customer1 = new Customer("Tinny", "Nakhon Pathom");
//   let customer2 = new Customer("นาย A นามสมมุติ", "ดาวอังคาร");
//   // console.log(customer1);
//   // Product Items
//   const item1 = new Item("0.6", "All in One Bucket", 299);
//   const item2 = new Item("0.3", "Chicken Pop", 39);
//   const item3 = new Item("0.4", "The boxs All star", 159);
//   const item4 = new Item("0.5", "Chick & Share Team Chicken Pop", 99);
//   const item5 = new Item("0.4", "KFC Rice Bowl", 89);

//   // Create Order
//   const order1 = new Order("2024/01/08", "In Process");
//   const order2 = new Order("2024/01/09", "In Process");

//   // Add order to customer
//   customer1.addOrder(order1);
//   customer2.addOrder(order2);

//   // Create order detail
//   const orderDetail1 = new OrderDetail(5, "Tax included");
//   orderDetail1.addItem(item3);
//   const orderDetail2 = new OrderDetail(4, "Tax included");
//   orderDetail2.addItem(item1);

//   const orderDetail3 = new OrderDetail(3, "Tax included");
//   orderDetail3.addItem(item2);
//   const orderDetail4 = new OrderDetail(4, "Tax included");
//   orderDetail4.addItem(item4);
//   const orderDetail5 = new OrderDetail(5, "Tax included");
//   orderDetail5.addItem(item5);

//   // Add orderdetail to an order
//   order1.addOrderDetail(orderDetail1);
//   order1.addOrderDetail(orderDetail2);

//   order2.addOrderDetail(orderDetail3);
//   order2.addOrderDetail(orderDetail4);
//   order2.addOrderDetail(orderDetail5);

//   // console.log(order1);
//   // console.log(orderDetail1);
//   console.log("ชื่อ : " + customer1.name);
//   console.log("จำนวนคำสั่งซื้อที่ : " + customer1.orders.length);
//   for (i = 0; i < customer1.orders.length; i++) {
//     console.log("คำสั่งซื้อที่ : " + (i + 1));
//     let total = 0;
//     for (j = 0; j < customer1.orders[i].orderDetails.length; j++) {
//       const item = customer1.orders[i].orderDetails[j].item;
//       const quantity = customer1.orders[i].orderDetails[j].quantity;
//       const subTotal = quantity * item.price;
//       total += subTotal;
//       console.log(
//         "ลำดับที่ : " +
//           (j + 1) +
//           " " +
//           item.description +
//           " จำนวน " +
//           quantity +
//           " รายการ  ราคา " +
//           subTotal +
//           " บาท"
//       );
//     }
//     console.log("รวมทั้งหมด " + total + " บาท");
//   }

//   console.log("ชื่อ : " + customer2.name);
//   console.log("จำนวนคำสั่งซื้อที่ : " + customer2.orders.length);
//   for (i = 0; i < customer2.orders.length; i++) {
//     console.log("คำสั่งซื้อที่ : " + (i + 1));
//     let total = 0;
//     for (j = 0; j < customer2.orders[i].orderDetails.length; j++) {
//       const item = customer2.orders[i].orderDetails[j].item;
//       const quantity = customer2.orders[i].orderDetails[j].quantity;
//       const subTotal = quantity * item.price;
//       total += subTotal;
//       console.log(
//         "ลำดับที่ : " +
//           (j + 1) +
//           " " +
//           item.description +
//           " จำนวน " +
//           quantity +
//           " รายการ  ราคา " +
//           subTotal +
//           " บาท"
//       );
//     }
//     console.log("รวมทั้งหมด " + total + " บาท");
//   }
// };

// oldMain();

const main = () => {
  let customer3 = new Customer("John Doe", "London");
  // console.log(customer3);

  const item6 = new Item("0.2", "Spaghetti", "199");
  const item7 = new Item("0.1", "Pizza", "99");
  const item8 = new Item("0.1", "Icecream", "59");
  const item9 = new Item("0.2", "lasagna", "199");
  const item10 = new Item("0.05", "Wine", "100");

  const order3 = new Order("2024/01/10", "In process");
  const order4 = new Order("2024/01/10", "In process");

  const orderDetail6 = new OrderDetail("3", "Tax included");
  const orderDetail7 = new OrderDetail("3", "Tax");

  orderDetail6.addItem(item6);
  orderDetail7.addItem(item10);

  order3.addOrderDetail(orderDetail6);
  order4.addOrderDetail(orderDetail7);

  customer3.addOrder(order3);
  customer3.addOrder(order4);

  console.log("ชื่อ : " + customer3.name);
  console.log("จำนวนครั้ง : " + customer3.orders.length);
  for (i = 0; i < customer3.orders.length; i++) {
    console.log("คำสั่งซื้อที่ : " + (i + 1));
    for (j = 0; j < customer3.orders[i].orderDetails.length; j++) {
      console.log(
        "ลำดับที่ : " +
          (j + 1) +
          " รายการ : " +
          customer3.orders[i].orderDetails[j].item.description +
          " จำนวน : " +
          customer3.orders[i].orderDetails[j].quantity +
          " ราคา : " +
          customer3.orders[i].orderDetails[j].calcSubTotal() +
          " บาท"
      );
      console.log(
        "น้ำหนัก : " +
          customer3.orders[i].orderDetails[j].calcWeight() +
          " กิโลกรัม"
      );
      console.log(
        "ภาษี : " + customer3.orders[i].orderDetails[j].calcTax() + " บาท"
      );
    }
  }
};

main();
