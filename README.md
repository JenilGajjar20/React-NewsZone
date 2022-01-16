
# NewsZone
**NewsZone** application can be used to grab different 
news quickly and efficiently. 
If you are interested in various news updates such as 
weather report, sports reviews, politics and 
entertainment then this application is for you.

This website is created using **React Class Based Component**. 
The code will also let you learn about the structure of 
**Class Based Components** in **React**.

## What are components in React?
- Components are like functions that return the HTML elements.
- Components are independent and reusable bits of code. 
- They serve the same purpose as the JavaScript functions, but work in isolation and return HTML via a **render()** function.

## Class Based Components
React ***class based components*** are the _bread_ and _butter_ of 
most modern web apps built in **ReactJS**. These components 
are simple classes that are made up of multiple functions 
that add functionality to the application. All the class
based components are child classes for the Component class 
of **ReactJS**.

When creating a React component, the component's name must start with an upper case letter.

The component has to include the **extends React.Component** statement, this statement creates an inheritance to React.Component and gives your component access to React.Component's functions.

The component also requires a **render()** method, this method returns HTML.

Example: 
```
Class Car extends React.Component{
    render(){
        return <h2>I am a Class Component</h2>
    }
}
```

## Component Contructor
If there is a **constructor()** function in your component, this function will be called when the components get initiated.

The constructor function is where you initiate the component's properties.

In React, component properties should be kept in an object **state**.

The constructor function is also where you honor the inheritance of the parent component by including the **super()** statement.

The **super()** statement executes the parent component's constructor function and your component has access to all the functions of the parent component(React.Component).

Example: 
```
Class Car extends React.Component{
    constructor(){
        super();
        this.state = {
            color: 'red'
        };
    }

    render(){
        return <h2>I am a {this.state.color} Car!</h2>
    }
}

Output: I am a red Car!
```

**News API** is a simple, easy-to-use REST API that 
returns JSON search results for current and 
historic news articles published by over 80,000 
worldwide sources.

Generate your own API KEY from [newsapi](https://newsapi.org/) and use it in the program.

