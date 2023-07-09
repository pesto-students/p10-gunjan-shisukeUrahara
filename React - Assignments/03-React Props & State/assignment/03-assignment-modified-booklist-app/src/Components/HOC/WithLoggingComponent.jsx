import React from "react";

function WithLoggingComponent(WrappedComponent) {
    return class extends React.Component {
        componentDidMount() {
            console.log(`${WrappedComponent.name} is rendered`);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
}

export default WithLoggingComponent;