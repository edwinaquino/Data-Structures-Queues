export default class Queue{
    constructor(){
        // Start an empty array
        this.items = [];

    }
    // Method to add items
    enqueue(item){
        // Increment the new item to the items array
        this.items.push(item)
    }

    // Remove the head of the array
    dequeue(){
        // Use the shift method to remove the first item in the array
        // BEFORE: Example: items['blue','red','green']
       return  this.items.shift();
       // Returns 'blue' and now items['red','green']
    }

    // View the first element in the array
    peek(){
        // check if array is empty first
        //if( isEmpty(this.items)) return false;
        return this.items[0]
    }
    // get the number of elements in the array
    getSize(){
        return this.items.length
    }
    // check if array is empty
    isEmpty(){
        return Array.isArray(this.items) && this.items.length ? false : true;
    }
}