/**
 * Class representing a Button
 */
export default class Button {
    /**
     * Create an instance of a Button
     *
     * @param {string} elementId - The id of the DOM element representing the button
     * @param {string} loaderHtml - An HTML string to temporarily replace the
     * text of the button with during asynchronous operations
     */
    constructor(elementId, loaderHtml = '<div class="loader"></div>') {
        this.el = document.getElementById(elementId);
        this.originalText = this.el.innerHtml;
        this.loaderHtml = loaderHtml;
    }

    /**
     * Binds a function call to the clicking of the button
     *
     * @param {function} func - The function to call when the button is clicked
     */
    onClick(func) {
        this.el.addEventListener('click', func);
    }

    /**
     * Binds an asynchronous function call to the clicking of the button, and
     * putting the button into a disabled "loading" state until the function completes
     *
     * @param {function} func - The function to call when the button is clicked.
     * Must return a Promise
     */
    onClickAsync(func) {
        this.el.addEventListener('click', () => {
            this.el.innerHtml = this.loaderHtml;
            this.el.classList.add('disabled');
            func().then(() => {
                this.el.innerHtml = this.originalText;
                this.el.classList.remove('disabled');
            });
        });
    }
}
