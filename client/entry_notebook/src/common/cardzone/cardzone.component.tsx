import React from 'react';
import BootstrapComponent from '../../core/BootstrapComponent';
import NoteCard from './card/card.component';
import "./cardzone.component.css";
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
        return (
            // https://stackoverflow.com/questions/54869777/react-typescript-adding-custom-attribute
            <div>
                <NoteCard {...allowed_props} />
            </div>
        );
    }
}