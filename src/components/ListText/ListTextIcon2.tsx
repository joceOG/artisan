import React, { Component } from 'react';
import Icon from '@mui/material/Icon';

import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface Item {
  text: string;
  icon: any;
}

interface State {
  items: Item[];
}

class ListTextIcon extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      items: [
        { text: "    +225 07 97 10 10 03 ", icon: <EmailIcon style={{ color:'#FFFFFF' }} /> },
        { text: "    info@artisanbe.ci", icon: <CallIcon style={{ color:'#FFFFFF' }} /> },
        { text: "    Angré 9eme Tranche non loin du super marché belle cote", icon: <LocationOnIcon style={{ color:'#FFFFFF' }} /> },
      ]
    };
  }

  render() {
    return (
        <div style={{ color:'#FFFFFF' }}>
        <ul>
          {this.state.items.map((item, index) => (
           <div >{item.icon} {item.text}</div>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListTextIcon;