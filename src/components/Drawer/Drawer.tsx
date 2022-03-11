import React, { FC, useState, useEffect} from 'react';
import { classNames } from '../../utils/classNames';
import './_Drawer.scss';

type Variant = 'permanent' | 'persistent' | 'temporary';

type Anchor = 'top' | 'bottom' | 'left' | 'right';



interface IDrawerProps {
    open?: boolean;
    anchor?: Anchor;
    className?: string;
    variant?: Variant;
    onCloseCallback?: () => void;
}

export const Drawer: FC<IDrawerProps> = ({
    open = false,
    anchor = 'left',
    variant = 'temporary',
    children,
    className,
    onCloseCallback
}) => {

   


    const handlerClose = (event: React.MouseEvent) => {
        if (onCloseCallback) {
            onCloseCallback();
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

    //onclose function


     
    return (
        <section className={closeDrawerStyle}>
            <div className={dimBackgroundStyle} onClick={handlerClose} data-testid='dimmed-background'></div>
            <aside className={styleClasses} data-testid="drawer">
                {children}
            </aside>
        </section>
    )
}

// export default Drawer;



export function CustomDrawer() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {

    setIsOpen(!isOpen);
};

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'row'}}>
      <Drawer
      anchor='left'
      open={isOpen}
      variant='temporary'
      onCloseCallback={toggleDrawer}
      >
          <h1>email</h1>
          <h1>email</h1>
          <h1>email</h1>
          <h1>email</h1>
          <h1>email</h1>
          <h1>email</h1>
          <h1>email</h1>

      </Drawer>
      <h1>Hello World!</h1>
      <button onClick={toggleDrawer}>Open / Close </button>
    </div>
  );
}