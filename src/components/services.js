import React from 'react'

class Services extends React.Component {
    render() {
        return (
            <main id="services">
                <h1>Services</h1>
                <ul id="services_ul">
                    <li>Full Stack Web Development
                    <ul>
                        <li>HTML and CSS</li>
                        <li>React.js and React Native</li>
                        <li>Express.JS</li>
                        <li>PostgreSQL</li>
                    </ul>
                    </li>
                    <li>Computer Repairs and Builds
                    <ul>
                        <li>Customizable PCs optimized for Gaming, Streaming, Art design, Photo Editing, ?</li>
                        <li>Replacement of Broken Parts</li>
                        <li>Upgrading Old Parts</li>
                        <li>Adding extension parts (WiFi and Bluetooth, HDDs and SSDs, Additional Graphics Cards, and Optical Drives (CD/DVD/Blu-Ray Readers and Writers)</li>
                        <li>Software Cleanup, Virus Scans, Dust cleaning</li>
                    </ul>
                    </li>
                    <li>At Home IT Solutions
                        <ul>
                            <li>Setting Up TVs, Audio Systems, Home Theaters, Smart Homes, WiFi, etc.</li>
                            <li>Basic Computer Training</li>
                            <li>Network Security</li>
                            <li>Data Management (Backup and Restore)</li>
                        </ul>
                    </li>
                </ul>
                <h3><a href="/contact">Contact Now</a></h3>
            </main>
        )
    }
}

export default Services