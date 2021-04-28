import React, { Component } from 'react'
import AboutImage from '../img/astronaut.jpg'
import {AboutBox, AboutImages, AboutText} from './AboutStyle'
import '../index.css'
export class About extends Component {
    render() {
        return (
            <div>
                <AboutBox>
                    <AboutImages src={AboutImage} alt="about image"/>
                    <span>
                        <AboutText>An astronaut (from the Greek "astron" (ἄστρον), meaning "star", and "nautes" (ναύτης), meaning "sailor") is a person trained, equipped, and deployed by a human spaceflight program to serve as a commander or crew member aboard a spacecraft.</AboutText>
                    </span>
                </AboutBox>
            </div>
        )
    }
}

export default About
