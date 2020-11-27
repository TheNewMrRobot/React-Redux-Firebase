import React, { Component } from 'react'
import Notifications from "./Notifications";
import ProjectList from "../Projects/ProjectList";

 class Dashboard extends Component {
    render() {
        return (
            <div class="dashboard container">
                <div class="row">
                    <div class="col s12 m6">
                        <ProjectList/>
                    </div>
                    <div class="col s12 m5 offset-m1">
                           < Notifications/>
                        </div>
                </div>
            </div>
        )
    }
}
export default Dashboard;