1. debugger
After console.log, debugger is my favorite quick and dirty debugging tool. If you place a debugger; line in your code, Chrome will automatically stop there when executing. You can even wrap it in conditionals, so it only runs when you need it.

if (thisThing) {    
debugger;}


2. Display objects as a table
Sometimes, you have a complex set of objects that you want to view. You can either console.log them and scroll through the list, or break out the console.table helper. It makes it easier to see what you’re dealing with!

var animals = [
    { animal: 'Horse', name: 'Henry', age: 43 },
    { animal: 'Dog', name: 'Fred', age: 13 },
    { animal: 'Cat', name: 'Frodo', age: 18 }
];
 
console.table(animals);
Will output:

Display objects as table to help in debugging JavaScript
3. Try all the sizes
While having every single mobile device on your desk would be awesome, it’s not feasible in the real world. How about resizing your viewport instead? Chrome provides you with everything you need. Jump into your inspector and click the toggle device mode button. Watch your media queries come to life!
