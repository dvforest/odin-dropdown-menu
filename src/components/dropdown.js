import { createEl } from '../utils.domBuilder.js';

export function createDropdown({ triggerEl = null, position = [0, 0], actions = [] }) {
    // Map all actions into button elements
    const buttons = actions.map(({ icon, title, onClick }) => {
        const button = createEl('button', {
            classes: ['dropdown-action'],
            children: [
                createEl('img', { classes: ['action-icon'], attrs: { src: icon } }),
                createEl('div', { classes: ['action-title'], text: title }),
            ],
        });
        button.addEventListener('click', () => {
            onClick();
            handleClose();
        });
        return button;
    });

    // Append buttons to container
    const container = createEl('div', { classes: ['dropdown-container'], children: buttons });

    // Position and size container
    container.style.position = 'absolute';
    if (triggerEl) {
        const rect = triggerEl.getBoundingClientRect();
        container.style.left = `${rect.left}px`;
        container.style.top = `${rect.top}px`;
    } else {
        container.style.left = `${position[0]}px`;
        container.style.top = `${position[1]}px`;
    }

    // Append container to document
    document.body.appendChild(container);

    // Function to delete the dropdown
    function handleClose() {
        container.remove();
    }

    // Close the dropdown if user clicks outside
    function handleClickOutside(event) {
        if (!container.contains(event.target)) {
            handleClose();
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return container;
}
