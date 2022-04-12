import React from "react";
import $ from 'jquery'

export default class App extends React.Component {
    componentDidMount() {
        $('<h1 />')
            .text('Hello World from JQuery')
            .css({ 
                textAlign: 'center',
                color: 'blue'
            })
            .appendTo($('header'))
    }
    render () {
        return (
            <React.Fragment>
                <header></header>
        
                <hr />

                <div className="box">
                    <h2 className="box-title">Box title</h2>
                    <p className="box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odit possimus doloribus quibusdam consectetur laborum quia et. Libero, non consequuntur?</p>
                </div>
            </React.Fragment>
        )
    }
}