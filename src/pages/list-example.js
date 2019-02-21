import React from 'react';
import {List} from 'react-virtualized';
import AvatarIcon from '../components/avatar-icon';
import MembersList from '../components/members-list';

// List data as an array of strings
const list = [
    'Brian Vaughn',
    'Potatoes 1',
    'Potatoes 2',
    'Potatoes 3',
    'Potatoes 4',
    'Potatoes 5',
    'Potatoes 6',
    'Potatoes 7',
    'Potatoes 8',
    'Potatoes 9',
    'Potatoes 10',
    'Potatoes 11',

];
const membersList = [
    {
        name: "potatoes",
        id: "4a2eza",
        url: "/profile.jpeg"
    }, {
        name: "Andromeda",
        id: "ah255g",
        url: "/profile.jpeg"
    }, {
        name: "Katana",
        id: "fvh0z",
        url: "/profile.jpeg"
    }, {
        name: "Merav",
        id: "exeyeg",
        url: "/profile.jpeg"
    }, {
        name: "Lior",
        id: "h8xaxo",
        url: "/profile.jpeg"
    }, {
        name: "Bast",
        id: "d9bimn",
        url: "/profile.jpeg"
    },
];


function rowRenderer({
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
            className="centering-element"
        >
            <AvatarIcon radius={20} onClick={() => {
                console.log("item click");
            }} url="/profile.jpeg"/> {list[index]}
        </div>
    )
}

export default class ListExample extends React.Component {
    render() {
        return (
            <section>
              {/*  <List
                    width={580}
                    height={350}
                    rowCount={list.length}
                    rowHeight={68}
                    rowRenderer={rowRenderer}
                />*/}
                <MembersList members={membersList} action={"add"} rowHeight={68}
                             width={580}
                             height={380}
                             onClick={(e) => {
                                 console.log("clicked", e);
                             }}/>

            </section>)
    }
}
