import React, { useState } from 'react';
import NavList from './Stories/Components/NavList/navList';
import Drawer from './Stories/Components/Drawer/drawer';
import { MdInbox, MdOutlineStar, MdSend, MdDrafts, MdEmail, MdWarning } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import './Stories/Styles/index.scss';

export default function App() {

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleDrawer = (event: React.MouseEvent) => {

      setIsOpen(!isOpen);
  };

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'row'}}>
      <Drawer
      anchor={'left'}
      open={isOpen}
      variant='temporary'
      >
      <NavList
          listItemLables={['Inbox', 'Starred', 'Drafts', 'Send Email', 'All Mail', 'Trash', 'Spam']}
          listItemIcons={[<MdInbox />, <MdOutlineStar />, <MdDrafts />, <MdSend />, <MdEmail />, <FaTrash />, <MdWarning /> ]}
          listItemLinkPaths={['/Inbox', '/Starred', '/Drafts', '/Send Email', '/All Mail', '/Trash', '/Spam']}
      />
      </Drawer>
      <h1>Hello World!</h1>
      <button onClick={toggleDrawer}>Open / Close </button>
    </div>
  );
}