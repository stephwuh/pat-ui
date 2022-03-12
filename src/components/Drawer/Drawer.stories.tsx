import React, { useState } from 'react';
import Drawer from './Drawer';

export default {
    title: 'Drawer',
    component: Drawer
}

export const permanentDrawer = () => (
    <div>
        <Drawer
            open={true}
            variant={'permanent'}
        >
            <h2>Inbox</h2>
            <h2>All Mail </h2>
            <h2>Send Email</h2>
            <hr></hr>
            <h2>Spam</h2>
            <h2>Trash</h2>
        </Drawer>
    </div>
)

export const persistentDrawer = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div style={{ display: 'flex', columnGap: '50px' }}>
            <Drawer
                open={isOpen}
                variant={'persistent'}
                onToggleCallback={handleToggle}
            >
                <h2>Inbox</h2>
                <h2>All Mail </h2>
                <h2>Send Email</h2>
                <hr></hr>
                <h2>Spam</h2>
                <h2>Trash</h2>
            </Drawer>
            <button style={{ height: '50px', alignSelf: 'center' }} onClick={handleToggle}>Open / Close </button>
        </div>
    );
};

export const temporaryDrawer = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div style={{ display: 'inline-block' }}>
            <Drawer
                open={isOpen}
                variant={'temporary'}
                onToggleCallback={handleToggle}
            >
                <h2>Inbox</h2>
                <h2>All Mail </h2>
                <h2>Send Email</h2>
                <hr></hr>
                <h2>Spam</h2>
                <h2>Trash</h2>
            </Drawer>
            <button style={{ height: '40px', alignSelf: 'center', margin: '0 50px' }} onClick={handleToggle}> Open </button>
            <i> Click dimmed background to close </i>
        </div>
    )
}

export const LeftDrawer = () => (
    <div>
        <Drawer
            open={true}
            anchor={'left'}
            variant={'persistent'}
        >
            <h2>Inbox</h2>
            <h2>All Mail </h2>
            <h2>Send Email</h2>
            <hr></hr>
            <h2>Spam</h2>
            <h2>Trash</h2>
        </Drawer>
    </div>
)

export const RightDrawer = () => (
    <div>
        <Drawer
            open={true}
            anchor={'right'}
            variant={'persistent'}
        >
            <h2>Inbox</h2>
            <h2>All Mail </h2>
            <h2>Send Email</h2>
            <hr></hr>
            <h2>Spam</h2>
            <h2>Trash</h2>
        </Drawer>
    </div>
)

export const TopDrawer = () => (
    <div>
        <Drawer
            open={true}
            anchor={'top'}
            variant={'persistent'}
        >
            <h2>Inbox</h2>
            <h2>All Mail </h2>
            <h2>Send Email</h2>
            <hr></hr>
            <h2>Spam</h2>
            <h2>Trash</h2>
        </Drawer>
    </div>
)

export const BottomDrawer = () => (
    <div>
        <Drawer
            open={true}
            anchor={'bottom'}
            variant={'persistent'}
        >
            <h2>Inbox</h2>
            <h2>All Mail </h2>
            <h2>Send Email</h2>
            <hr></hr>
            <h2>Spam</h2>
            <h2>Trash</h2>
        </Drawer>
    </div>
)