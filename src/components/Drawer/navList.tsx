import React, { FC, useState, useEffect } from 'react';


interface INavListProps {
    listItemLables?: string[];
    listItemIcons?: any[];
    listItemLinkPaths?: string[];

    listItemData?: { name: string, icon: any, linkPath: string };
}

const NavList: FC<INavListProps> = ({
    listItemLables,
    listItemIcons,
    listItemLinkPaths,

}) => {

    const [listItemData, setListItemData] = useState([{name:'',icon:'',linkPath:''}]);
    const newData = [{name:'', icon:'', linkPath:''}];

    useEffect(() => {
        let i: any;
        for (i in listItemLables) {
            const data = { name: listItemLables![i], icon: listItemIcons![i], linkPath: listItemLinkPaths![i] };
            newData.push(data);
        }   
        newData.shift();
        setListItemData(newData);
    }, []);

    return (
        <section className='navList'>
            {listItemData?.map((listItem, i) => [
                <h1 key={i} className='list-item__label'>
                <span className='list-item__icon'>{listItem.icon}</span>
                {listItem.name}</h1>
            ])}
        </section>
    )
}

export default NavList;