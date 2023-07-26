import React from "react";
import './index.css';
import CardComponent from "../CardComponent";

export const LandingPage = ({ data, children }) => {
    return (
        <div className="landing-page">
            <div className="landing-page--header">
                <div className="search-area">Search</div>
                <div className="info-area">
                    <div>Learn</div>
                    <div>Donate</div>
                </div>
            </div>
            <div className="landing-page--sub-header">
                <div className="sub-header-text">
                    <p>Good Things</p>
                    <p>Foundation</p>
                </div>
                <div className="sub-header-tabs">
                    {children}
                </div>
            </div>
            <div className="landing-page--contents">
                <div className="content-block-1">
                    <h1>Get online week 2021 </h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                    <button>Get Involved now</button>
                </div>
                <div className="content-block-2">
                    <img src="/images/sample2.jpg" alt="sample image" typeof="jpg" />
                    <div>
                        <h3>We are a social change charity, <br /> helping people to improve their lives <br /> through digital</h3>
                        <h4>we tackle the most pressing issues of our time, working <br /> with partners in thousands of communities across the UK <br /> and further afield.</h4>
                        <button>Learn more about us</button>
                    </div>
                </div>
            </div>
            <div className="landing-page--helper-window">
                <h2>How can we help you?</h2>
                <h5>Let us know who you are and what you're looking for, and we'll help get you to the right place.</h5>
                <div>
                    <p>I am </p> <p className="underline">an individual</p> <p> and I want </p> <p className="underline"> want to learn</p>
                    <button>Start now</button>
                </div>
            </div>
            <div className="landing-page--what-do-we-do-section">
                <h2>What do we do</h2>
                <h5>you might not have heard of us, but we are the people behind the following impactful programmers.</h5>
                <div className="section-bar">
                    {
                        data.map((item, index) => {
                            return (<CardComponent key={index} title={item.title[0].text} text={item.text} />)
                        })
                    }
                </div>
                <button>More about what we do</button>
            </div>
        </div>
    )
}