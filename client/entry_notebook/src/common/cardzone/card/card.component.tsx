import BootstrapComponent from '../../../core/BootstrapComponent';
import React from 'react';
import { CardProp, CardProfile } from '../../../model/types/CardTypes';
import { Card, Icon, Image } from 'semantic-ui-react';
import './card.component.css';
class NoteCard extends BootstrapComponent { 
    curInfo: CardProfile;
    url: String;
    constructor(props: any) { 
        super(props);
        this.url = props.url;
        this.curInfo = props.profile;
    }
    render() { 
        return (
            <Card className="note-card">
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{this.curInfo.name}</Card.Header>
                <Card.Meta>
                        <span className='date'>{this.curInfo.joined.toString()}</span>
                </Card.Meta>
                <Card.Description>
                        { this.curInfo.profile }
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                        {this.curInfo.connections} related
                </a>
                </Card.Content>
            </Card>
        );
    }
}

export default NoteCard;