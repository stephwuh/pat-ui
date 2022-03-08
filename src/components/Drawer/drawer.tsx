import React, { FC, useState, useEffect } from 'react';
import { classNames } from '../../utils/classNames';

export enum DrawerVariant {
    Permanent = 'Permanent',
    Persistent = 'Persistent',
    Temporary = 'Temporary',
}

export type Anchor = 'top' | 'bottom' | 'left' | 'right';

interface IDrawerProps {
    className?: string;
    anchor?: Anchor;
    variant?: DrawerVariant;
    open?: boolean;
    onClose?: (e?: React.MouseEvent) => void;
}

const Drawer: FC<IDrawerProps> = ({
    className,
    anchor,
    variant,
    open = false,
    onClose,
    children,

}) => {

    let styleClasses = classNames('drawer', {
        [`drawer-${anchor}`]: true,
        [`drawer-${open ? '' : 'openStateFalse'}`]: true,
        [`drawer-dim-background`]: true,
    })
    if (className) {
        styleClasses += ' ' + className;
    }
    
    let dimBackgroundStyle = '';
    if(variant != 'Permanent' && open === true){
        dimBackgroundStyle = 'drawer-dimBackground';
    }

    return (
        <section>
            <div className={dimBackgroundStyle}></div>
            <aside className={styleClasses} >
                {children}
            </aside>
        </section>
    )
}

export default Drawer;