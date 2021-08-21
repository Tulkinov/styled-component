import React, { Component } from 'react'
import {Wrapper, Button } from './style'

export default class App extends Component {
    render() {
        return (
            <Wrapper>
                <Button type='large' >Large</Button>
                {/* <Button type='medium' >Medium</Button> */}
                <Button type='small' >Small</Button>
            </Wrapper>
        )
    }
}
