/**
 * Class representing a Modal dialog window
 */
export default class Modal {
    /**
     * Create an instance of a Modal dialog, and initialize its close actions
     *
     * @param {string} elementId - The id of the DOM element representing the
     * modal dialog container
     */
    constructor(elementId) {
        this.el = document.getElementById(elementId);

        // If the modal background area is clicked, close the modal
        document.addEventListener('click', (event) => {
            if (event.currentTarget.classList.contains('.modal')) {
                this.hide();
            }
        });
        // If anything in the modal with the 'modal-close' class is clicked, close the modal
        this.el.querySelector('.modal-close').addEventListener('click', () => {
            this.hide();
        });
    }

    /**
     * Makes the modal dialog visible
     */
    open() {
        this.el.classList.add('open');
    }

    /**
     * Dismisses the modal dialog
     *
     * @param {function} closeFunction - An optional function to run when the
     *  modal closes (i.e. to empty out the fields of a form)
     */
    close(closeFunction) {
        this.el.classList.remove('open');
        if (closeFunction && typeof closeFunction === 'function') {
            closeFunction();
        }
    }
}
