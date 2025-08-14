import './style.css';
import { createDropdown } from './components/dropdown/dropdown.js';
import { icon } from './assets/icon.js';

const app = document.querySelector('.app');
app.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    rightClickMenu(e);
});

const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', (e) => {
    dropdownMenu(e);
});

function rightClickMenu(e) {
    const x = e.clientX;
    const y = e.clientY;

    createDropdown({
        position: [x, y],
        actions: [
            {
                icon: icon.pause,
                title: 'Pause',
                onClick: () => console.log('Paused!'),
            },
            {
                icon: icon.share,
                title: 'Share',
                onClick: () => console.log('Shared!'),
            },
            {
                icon: icon.copy,
                title: 'Copy',
                onClick: () => console.log('Copied!'),
            },
            {
                icon: icon.trash,
                title: 'Delete',
                onClick: () => console.log('Deleted!'),
            },
        ],
    });
}

function dropdownMenu(e) {
    createDropdown({
        triggerEl: e.currentTarget,
        actions: [
            {
                icon: icon.pause,
                title: 'Pause',
                onClick: () => console.log('Paused!'),
            },
            {
                icon: icon.share,
                title: 'Share',
                onClick: () => console.log('Shared!'),
            },
            {
                icon: icon.copy,
                title: 'Copy',
                onClick: () => console.log('Copied!'),
            },
            {
                icon: icon.trash,
                title: 'Delete',
                onClick: () => console.log('Deleted!'),
            },
        ],
    });
}
