import React, { Component } from 'react'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import BTProductlist from './BTProductlist'
import BTSlider from './BTSlider'

export default class BTLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader />
                <BTSlider />
                <BTProductlist />
                <BTFooter />
            </div>
        )
    }
}
