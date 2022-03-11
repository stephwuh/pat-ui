import React, { FC, useState } from 'react';
import { classNames } from '../../utils/classNames';

type Variant = 'permanent' | 'persistent' | 'temporary';

type Anchor = 'top' | 'bottom' | 'left' | 'right';

export interface IDrawerProps {
    open?: boolean;
    anchor?: Anchor;
    className?: string;
    variant?: Variant;
    onToggleCallback?: () => void;
}

/**
 * A drawer allows user to hide or show a sidebar with annimations.
 *
 * ```js
 * import { Drawer } from 'pat-ui'
 * ```
 */

const Drawer: FC<IDrawerProps> = ({
    open = false,
    anchor = 'left',
    variant = 'temporary',
    children,
    className,
    onToggleCallback
}) => {

    const handleToggleDrawer = (event: React.MouseEvent) => {
        if (onToggleCallback) {
            onToggleCallback();
        }
    };

    let styleClasses = classNames('drawer', {
        [`${variant === 'permanent' ? `drawer-${anchor}` : ''}`]: true,
        [`${variant !== 'permanent' && open ? `drawer-open-${anchor}` : ''}`]: true,
        [`${open ? '' : `drawer-close-${anchor}`}`]: true,
        [`${variant === 'permanent' ? `drawer-permanent` : ''}`]: true,
        [`${variant === 'persistent' ? `drawer-persistent` : ''}`]: true,
        [`${variant === 'temporary' ? `drawer-temporary` : ''}`]: true,
    })
    if (className) {
        styleClasses += ' ' + className;
    }

    let dimBackgroundStyle = '';
    if (variant === 'temporary' && open === true) {
        dimBackgroundStyle = 'drawer-dimBackground';
    }

    const [closeDrawerStyle, setCloseDrawerStyle] = useState<string>('');

    setTimeout(() => {
        let closeDrawer = `${open ? 'drawer-open' : 'drawer-close'}`;
        setCloseDrawerStyle(closeDrawer);
    }, 300)

    return (
        <section className={closeDrawerStyle}>
            <div className={dimBackgroundStyle} onClick={handleToggleDrawer} data-testid='dimmed-background'></div>
            <aside className={styleClasses} data-testid="drawer">
                {children}
            </aside>
        </section>
    )
}

export default Drawer;