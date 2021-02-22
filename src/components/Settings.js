import React from 'react';
import {Dropdown} from 'react-bootstrap';

const Settings = () => {

    function openResized() {
        let height = 1200;

        if(window.screen) {
            height = window.screen.availHeight;
        }
        
        window.open("https://hperezs.github.io/note-taker-app", "", "width=630, height=" + height);
    }

    function openMagento() {
        let magentoWindow = window.open("https://www.backstreet-surveillance.com/index.php/admin/sales_order/");
        magentoWindow.focus();
    }

    return(
        <Dropdown className="ml-3" size="sm">
            <Dropdown.Toggle id="dropdown-settings">
                <i className="fas fa-cog"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={e => openResized()}>Open a resized window</Dropdown.Item>
                <Dropdown.Item onClick={e => openMagento()}>Open Magento Admin Pannel</Dropdown.Item>
            </Dropdown.Menu>
                
        </Dropdown>
    )
}

export default Settings;