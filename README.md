# ETA Template Engine Example

This is a simple Node.js application that demonstrates how to use the ETA template engine with Express.

## Features

- Express.js web server
- ETA template engine integration
- Sample template with dynamic content
- Basic styling

## Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

## Running the Application

Start the server:

```bash
node index.js
```

The application will be available at http://localhost:3000

## Template Structure

The application uses ETA templates located in the `views` directory. The main template is `index.eta`, which demonstrates:

- Variable interpolation using `<%= variable %>`
- Loops using `<% items.forEach(function(item) { %>`
- HTML structure with embedded styles

## Adding New Templates

1. Create a new `.eta` file in the `views` directory
2. Add a new route in `index.js` to render the template
3. Pass any required data to the template using the `res.render()` method
