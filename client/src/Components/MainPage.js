import React, { Component } from 'react'
import Landing from './Landing'
import Categories from './Categories'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <Landing />
                <Categories />

            </div>
        )
    }
}
