import React from 'react';

import Drawer from './Drawer';

import { render, screen } from '@testing-library/react';

describe('Drawer', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Drawer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Developers can choose the style of the temporary Drawer using props', () => {
    render(<Drawer variant="temporary" />);
    const drawerElement = screen.getByTestId('drawer');
    expect(drawerElement).toHaveClass('drawer-temporary');
    expect(drawerElement).not.toHaveClass('drawer-persistent');
  });
  it('Developers can choose the style of the persistent Drawer using props', () => {
    render(<Drawer variant="persistent" />);
    const drawerElement = screen.getByTestId('drawer');
    expect(drawerElement).toHaveClass('drawer-persistent');
    expect(drawerElement).not.toHaveClass('drawer-temporary');
  });

  it('Developers can control the open state of the component from props.', () => {
    render(<Drawer open={true} />);
    const drawerElement = screen.getByTestId('drawer');
    expect(drawerElement).toHaveClass('drawer-open-left');
    expect(drawerElement).not.toHaveClass('drawer-close-left');
  });

  it('Developers can control the close state of the component from props.', () => {
    render(<Drawer open={false} />);
    const drawerElement = screen.getByTestId('drawer');
    expect(drawerElement).toHaveClass('drawer-close-left');
    expect(drawerElement).not.toHaveClass('drawer-open-left');
  });

  it('Developers should see a dimed backdrop when the drawer component is open when style is set to temporary.', () => {
    render(<Drawer open={true} variant="temporary" />);
    const drawerElement = screen.getByTestId('dimmed-background');
    expect(drawerElement).toHaveClass('drawer-dimBackground');
  });

  it('Developers should not see a dimed backdrop when the drawer component is closed.', () => {
    render(<Drawer open={false} variant="temporary" />);
    const drawerElement = screen.getByTestId('dimmed-background');
    expect(drawerElement).not.toHaveClass('drawer-dimBackground');
  });

  it('Developers should not see a dimed backdrop when the drawer component style is set to persistent.', () => {
    render(<Drawer open={true} variant="persistent" />);
    const dimmedBackgroundDivElement = screen.getByTestId('dimmed-background');
    expect(dimmedBackgroundDivElement).not.toHaveClass('drawer-dimBackground');
  });

  it('Developers should be able to choose the left open direction of the drawer component from props.', () => {
    render(<Drawer open={true} anchor="left" />);
    const drawerElement = screen.getByTestId('drawer');
    expect(drawerElement).toHaveClass('drawer-open-left');
    expect(drawerElement).not.toHaveClass('drawer-open-right');
    expect(drawerElement).not.toHaveClass('drawer-open-top');
    expect(drawerElement).not.toHaveClass('drawer-open-bottom');
  });

  it('Developers should be able to choose the right open direction of the drawer component from props.', () => {
    render(<Drawer open={true} anchor="right" />);
    const drawerElement = screen.getByTestId('drawer');
    expect(drawerElement).toHaveClass('drawer-open-right');
    expect(drawerElement).not.toHaveClass('drawer-open-left');
    expect(drawerElement).not.toHaveClass('drawer-open-top');
    expect(drawerElement).not.toHaveClass('drawer-open-bottom');
  });

  it('Developers should be able to choose the top open direction of the drawer component from props.', () => {
    render(<Drawer open={true} anchor="top" />);
    const drawerElement = screen.getByTestId('drawer');
    expect(drawerElement).toHaveClass('drawer-open-top');
    expect(drawerElement).not.toHaveClass('drawer-open-left');
    expect(drawerElement).not.toHaveClass('drawer-open-right');
    expect(drawerElement).not.toHaveClass('drawer-open-bottom');
  });

  it('Developers should be able to choose the bottom open direction of the drawer component from props.', () => {
    render(<Drawer open={true} anchor="bottom" />);
    const drawerElement = screen.getByTestId('drawer');
    expect(drawerElement).toHaveClass('drawer-open-bottom');
    expect(drawerElement).not.toHaveClass('drawer-open-left');
    expect(drawerElement).not.toHaveClass('drawer-open-right');
    expect(drawerElement).not.toHaveClass('drawer-open-top');
  });

  it('Developers can listen to the change of the close event of the component by providing the onClose callback to the props.', () => {
    let openState = true;
    const handleClick = jest.fn().mockImplementation(() => {
      openState = !openState;
    });

    render(
      <div>
        <button onClick={handleClick()}>Close</button>
        <Drawer open={openState} onToggleCallback={handleClick} />
      </div>
    );
    const drawerElement = screen.getByTestId('drawer');
    expect(drawerElement).toHaveClass('drawer-close-left');
  });


});