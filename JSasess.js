class Product{
    constructor(productCode,productName,stock,price)
    {
        this.productCode=productCode;
        this.productName=productName;
        this.stock=stock;
        this.price=price;
    }
    get() {
        console.get("Stock:",this.stock);
    }
    display(){
        console.log("Product Details..............");
        console.log(`Product Code:${this.productCode}\n Product Name:${this.productName}\n Stock:${this.stock}\n Price ${this.price}.`);

    }
}

class Activity extends Product{
    constructor(productCode,productName,stock,price,customerName,quantity)
    {
        super(productCode,productName,stock,price);
        this.customerName=customerName;
        this.quantity = quantity;
    }
    amount =0;
    stockLeft=0;
    sales()
    {
        this.display();
        if(this.stock>=0)
        {
            
            if(this.quantity>this.stock+this.quantity)
            {
                console.log("Insufficient Stocks available.....");
                console.log("Required:",this.quantity);
                console.log("Stock available:",this.stock);
                console.log("Price:",this.price);
                this.amount=this.stock*this.price;
                console.log("Total Cost:",this.amount);
                this.stock=0;
            }
            else if(this.stock>this.quantity)
            {
                console.log("Product Required:",this.productCode);
                console.log("Quantity Required:",this.quantity);
                console.log("Price:",this.price);
                this.amount=this.price*this.quantity;
                console.log("Total Cost:",this.amount);
                this.stock=this.stock-this.quantity;
            }
            else
            {
                console.log("Purchase cannot be made..  Stock Empty..");
                console.log("Stock:",this.stock);
            }
        
        }
       
        this.display();
    }
    details()
    {
        console.log("Activity Class Details.....");
        console.log(`Customer Name:${this.customerName}\n Product Code:${this.productCode}\n Product Name:${this.productName}\n Stock:${this.stock}\n Price:${this.price} \n Amount:${this.amount}`)
    }
   
}

let obj1 = new Activity(001,"Kitkat",0,20,"Rahul",50);
obj1.sales();
obj1.details();