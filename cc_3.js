// Task 1: Product Price Management Scenario: Online Store You are managing a product pricing system
let prices = [6, 3, 7, 4, 10];
prices.push(2)
let removedItem = prices.shift(0);
console.log("Price List", prices)

// Task 2: Modifying Customer Orders Scenario: Order List You are processing customer orders and need to update order quantities
let orders = [5, 1, 3, 2, 4]
orders[3] = 3 + 5
let total = orders.reduce((sum, order) => sum + order, 0);
console.log("Order Quantity", orders)
console.log("Total Orders", total)

//Task 3: Employee Performance Tracking Scenario: HR System You are tracking employee performance data
let employee = {
    name: "Arthur Morgan",
    performanceScore: 95,
    isActive: true
};
employee.performanceScore = 100;
employee.promotionEligible = true;
console.log("Employee Information", employee)

//Task 4: Customer Feedback Records Scenario: Feedback Management You are collecting customer feedback data
let feedback = [{
    customerName: "Dutch Van Der Linde",
    feedbackText: "Very Good Service!",
    rating: 5
},];
feedback.push({
    customerName: "John Marston",
    feedbackText: "Awesome Job!",
    rating: 5
}),
feedback.push({
    customerName: "Micah Bell",
    feedbackText: "Poor Service. Needs Improvement",
    rating: 1
});
feedback.splice(3, 3, "Would Return?")
console.log("Customer Feedback", feedback)

//Task 5: Inventory Management System Scenario: Stock Analysis You are developing a system to track inventory details
let inventory = {
    itemName: "Horse Reviver",
    stockCount: 100,
    price: 9.50
};
let calculator = {
    num1: 100,
    num2: 9.50,
    multiply: function() {
        return this.num1 * this.num2;
    }
};
console.log("Inventory Data", inventory,)
console.log("Total Value", calculator.multiply())