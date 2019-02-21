import React from 'react';
import { List } from 'react-virtualized';
import AvatarIcon from '../components/avatar-icon';
// List data as an array of strings
const list = [
    'Brian Vaughn',
    'Potatoes 1',
    'Potatoes 2',
    'Potatoes 3',
    'Potatoes 4',
    'Potatoes 5',
    'Brian Vaughn',
    'Potatoes 1',
    'Potatoes 2',
    'Potatoes 3',
    'Potatoes 4',
    'Potatoes 5',
    'Brian Vaughn',
    'Potatoes 1',
    'Potatoes 2',
    'Potatoes 3',
    'Potatoes 4',
    'Potatoes 5',
    'Brian Vaughn',
    'Potatoes 1',
    'Potatoes 2',
    'Potatoes 3',
    'Potatoes 4',
    'Potatoes 5',
    'Brian Vaughn',
    'Potatoes 1',
    'Potatoes 2',
    'Potatoes 3',
    'Potatoes 4',
    'Potatoes 5',
    'Brian Vaughn',
    'Potatoes 1',
    'Potatoes 2',
    'Potatoes 3',
    'Potatoes 4',
    'Potatoes 5',
    'Brian Vaughn',
    'Potatoes 1',
    'Potatoes 2',
    'Potatoes 3',
    'Potatoes 4',
    'Potatoes 5',
    'Brian Vaughn',
    'Potatoes 1',
    'Potatoes 2',
    'Potatoes 3',
    'Potatoes 4',
    'Potatoes 5',
];

function rowRenderer ({
                          key,         // Unique key within array of rows
                          index,       // Index of row within collection
                          isScrolling, // The List is currently being scrolled
                          isVisible,   // This row is visible within the List (eg it is not an overscanned row)
                          style        // Style object to be applied to row (to position it)
                      }) {
    return (
        <div
            key={key}
            style={style}
        >
           <AvatarIcon radius={20} onClick={()=>{console.log("item click");}} url="/profile.jpeg"/> {list[index]}
        </div>
    )
}

export default class ListExample extends React.Component{
    render(){
        return     <List
            width={300}
            height={300}
            rowCount={list.length}
            rowHeight={68}
            rowRenderer={rowRenderer}

        />
    }
}
