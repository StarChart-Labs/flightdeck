# flightdeck.js
[![Build Status](https://travis-ci.org/StarChart-Labs/flightdeck.svg?branch=master)](https://travis-ci.org/StarChart-Labs/flightdeck) [![Black Duck Security Risk](https://copilot.blackducksoftware.com/github/repos/StarChart-Labs/flightdeck/branches/master/badge-risk.svg)](https://copilot.blackducksoftware.com/github/repos/StarChart-Labs/flightdeck/branches/master) [![npm (scoped)](https://img.shields.io/npm/v/@starchart-labs/flightdeck.svg)](https://www.npmjs.com/package/@starchart-labs/flightdeck)

Flightdeck is a collection of lightweight and powerful Javascript modules for common web UI elements. The goal is to bring object-oriented sensibilities to the script-side of the UI. For example, a button in HTML is tied to an instance of the Button class in Flightdeck.

Starchart Labs' web-applications use Flightdeck to power their frontends, and you can too!

## Button
```javascript
import { Button } from '@starchart-labs/flightdeck';

let myButton = new Button('demo-button');
myButton.onClick(() => console.log('hello'));
```
### Constructor
Creates an instance of Button.
#### Arguments
* `elementId` {string} - The ID of a DOM element on the page to tie to this instance of Button
* `loaderHtml` {string} (optional) - An HTML string to display when the button is in the loading state (see onClickAsync)

### onClick
Sets up a click event for the Button.
#### Arguments
* `func` {function} - A function to be called whenever the button is clicked

### onClickAsync
Sets up an asynchronous click event for the Button. While the event is being performed, the button will have the class `disabled` added to it, and the text of the button will be temporarily replaced by whatever `loaderHtml` was specified in the constructor (by default this is `<div class="loader"></div>`).
#### Arguments
* `func` {function returns Promise} - A function to be called whenever the button is clicked. This function must return the type `Promise` for the loading state to work correctly

## Modal
```javascript
import { Modal } from '@starchart-labs/flightdeck';

let myModal = new Modal('demo-modal');
myModal.open();
```
### Constructor
Creates an instance of Modal. Any DOM children of this Modal with the class `modal-close` will be automatically set up with an event listener to close this Modal when clicked. Additionally, the background area around the Modal will also close the Modal when clicked, unless `sticky` is set to true.
#### Arguments
* `elementId` {string} - The ID of a DOM element on the page to tie to this instance of Modal
* `sticky` {boolean} (optional) - If sticky is true, clicking the background around the modal will _not_ close it. This is false by default, so the modal can be easily closed.
* `closeFunction` {function} (optional) - A function to be run whenever the modal is closed. For example, to clear out the fields of a form in the modal.

### open
Shows the Modal by adding the class `open` to the DOM element.

### close
Closes the Modal by removing the class `open` from the DOM element. Will call `closeFunction` if one was provided in the constructor.
