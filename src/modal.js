/**
 * Class representing a Modal dialog window
 */
export default class Modal {
    /**
     * Create an instance of a Modal dialog, and initialize its close actions
     *
     * @param {string} elementId - The id of the DOM element representing the
     * modal dialog container
     * @param {boolean} sticky - If true, clicking the background area will not close
     * the modal
     * @param {function} closeFunction - An optional function to run when the
     *  modal closes (i.e. to empty out the fields of a form)
     */
    constructor(elementId, sticky = false, closeFunction) {
        this.el = document.getElementById(elementId);
        this.closeFunction = closeFunction;

        // If not sticky, and the modal background area is clicked, close the modal
        if (sticky === false) {
            document.addEventListener('click', (event) => {
                if (event.target.classList && event.target.classList.contains('modal')) {
                    this.close();
                }
            });
        }
        // If anything in the modal with the 'modal-close' class is clicked, close the modal
        if (this.el && this.el.querySelector('.modal-close')) {
            this.el.querySelector('.modal-close').addEventListener('click', () => {
                this.close();
            });
        }
    }

    /**
     * Makes the modal dialog visible
     */
    open() {
        this.el.classList.add('open');
    }

    /**
     * Dismisses the modal dialog
     */
    close() {
        this.el.classList.remove('open');
        if (this.closeFunction && typeof this.closeFunction === 'function') {
            this.closeFunction();
        }
    }
}
