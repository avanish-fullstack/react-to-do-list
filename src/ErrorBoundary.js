import React , { Component } from "react";

class ErrorBoundary extends  Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error , errorInfo) {
        //logging  the error to any error reporting api
    }

    render () {
        if(this.state.hasError) {
            return <h1>An error has occured. Please contant helpdesk</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;