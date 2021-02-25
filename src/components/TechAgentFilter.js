import {withAuth0} from '@auth0/auth0-react';
import React, {Component} from 'react';
import {Dropdown, Form} from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

class TechAgentFilter extends Component {
    constructor() {
        super();
        this.state = {
            techAgents: null,
            techAgentSelected: ''
        }
    }

    fetchTechAgents() {
        fetch('https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/tech-agents')
            .then(response => {
                response.json().then(data => {
                    this.setState({
                        techAgents: data
                    })
                    this.selectDefault(data);
                })
            });
    }

    selectDefault(data) {
        console.log('Select default called. Data: ');
        console.log(data);
        data.map(document => {
            if (document.name == this.props.userName){
                this.setState({
                    techAgentSelected: document.name
                })
            }
        })
        this.props.filterByAgent(this.props.userName);
    }

    isSelected(name) {
        return name == this.state.techAgentSelected;
    }

    selectAgent(name) {
        this.setState({
            techAgentSelected: name
        })
        this.props.filterByAgent(name);
    }

    render() {
        if(!this.state.techAgents) {
            this.fetchTechAgents();
            return(
                <SkeletonTheme color="#17a2b8" highlightColor="#d9f8fc">
                    <Skeleton width={180} height={38} duration={1} />
                </SkeletonTheme>
            )
        } else {
            return (
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        Filter By Tech Agent
                    </Dropdown.Toggle>

                    <Dropdown.Menu> 
                        {this.state.techAgents.map(techAgent => (
                            <Dropdown.Item onClick={e => this.selectAgent(techAgent.name)}>
                                <Form.Check 
                                    name={techAgent.name}
                                    type="radio"
                                    label={techAgent.name}
                                    checked={this.isSelected(techAgent.name)}
                                    />
                            </Dropdown.Item>
                        ))}
                        <Dropdown.Item onClick={e => this.selectAgent('All')}>
                            <Form.Check name="All" type="radio" label="All" checked={this.isSelected('All')} />            
                        </Dropdown.Item> 
                    </Dropdown.Menu>
                </Dropdown>
            )
        }
        
    }
}

export default withAuth0(TechAgentFilter);
