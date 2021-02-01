import React, { Component } from 'react'
import BTProductItem from './BTProductItem'

export default class BTProductlist extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <h3 className="text-center">Best smart phone</h3>
                    <div className="row">
                        <div className="col-3">
                            <BTProductItem />
                        </div>
                        <div className="col-3">
                            <BTProductItem />
                        </div>
                        <div className="col-3">
                            <BTProductItem />
                        </div>
                        <div className="col-3">
                            <BTProductItem />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
