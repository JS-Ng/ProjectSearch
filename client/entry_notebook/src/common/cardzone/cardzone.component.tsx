import React from 'react';
import BootstrapComponent from '../../core/BootstrapComponent';
import NoteCard from './card/card.component';
import "./cardzone.component.css";
import { Icon } from 'semantic-ui-react';
export default class CardZone extends BootstrapComponent { 
    component_class = "cardZone"
    testInfo = {
        profile: "asdawd",
        joined: new Date(),
        connections: 100,
        name: "json"
    }
    render() {
        let allowed_props = {
            url: "dwadw",
            profile: this.testInfo
        }
        let cards = [allowed_props, allowed_props, allowed_props];
        return (
            // https://stackoverflow.com/questions/54869777/react-typescript-adding-custom-attribute
            <div className="card-zone">
                {cards.map((e, i) => <NoteCard {...e} key={i}/>)}
            </div>
        );
    }
}