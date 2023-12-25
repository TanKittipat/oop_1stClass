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
    console.log("999");
  }
  calcTax() {
    console.log("888");
  }
  calcTotal() {
    console.log("777");
  }
  calcTotalWeight() {
    console.log("666");
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
    console.log("555");
  }
  calcWeight() {
    console.log("444");
  }
  calcTax() {
    console.log("333");
  }
  addItem(item) {
    this.item = item;
  }
}

class Item {
  constructor(shippingWeight, description, price) {
    this.shippingWeight = shippingWeight;
    this.description = description;
    this.price = price;
  }

  getPriceForQuantity() {
    console.log("222");
  }
  getTax() {
    console.log("111");
  }
  inStock() {
    console.log("123");
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
