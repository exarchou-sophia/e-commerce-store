import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div>
            <div
                className="hero min-h-[calc(100vh-18rem)]"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
            >
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md bg-white/15 backdrop-blur-2xl rounded-lg p-6">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">
                                E-Commerce Store!
                            </h1>
                            <p className="mb-5">
                                Elevate Your Shopping Experience – Where Quality
                                Meets Affordability!
                            </p>

                            <Link to="/home">
                                <span className="btn btn-primary">
                                    Products
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
