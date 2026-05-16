# Js-Learning

Js-Learning is a tiny JavaScript practice repository for revisiting basic object-creation patterns in JavaScript.

## What Is Inside

- `index.js`: examples of creating objects with a factory function and a constructor function.
- `index.html`: minimal HTML file intended to load the JavaScript file in a browser.

## Covered Concepts

### Factory Function

`createCircle(radius)` returns a plain object with:

- `radius`
- `draw()` method

### Constructor Function

`Circle(radius)` is used with `new` to create an object with:

- `radius`
- `draw()` method

## Project Structure

```text
.
├── index.html
├── index.js
└── README.md
```

## Running The Example

You can run the JavaScript directly with Node:

```bash
node index.js
```

Or open `index.html` in a browser after linking the script like this:

```html
<script src="index.js"></script>
```

## Notes

This repository is a beginner-friendly JavaScript learning scratchpad. It does not use npm, bundlers, frameworks, or external dependencies.
