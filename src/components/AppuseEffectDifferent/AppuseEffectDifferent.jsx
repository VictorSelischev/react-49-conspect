import { useState, useEffect } from 'react';

const AppuseEffectDifferent = () => {
    // 1. Run effect only on mount to init some library
    useEffect(() => {
        initThirdPartyLibrary();
    }, [])

    // 2. Run effect only when username prop changes
    useEffect(() => {
        fetchUser(username);
    }, [username])

    // 3. Run effect on value prop change
    useEffect(() => {
        // Do stuff when value prop changes
    }, [value])

    // 4. Run effect on isLoggedIn state change
    useEffect(() => {
        // Do stuff when isLoggedIn state changes
    }, [isLoggedIn])

    // 5. Run effect on mount and clean up on unmount
    useEffect(() => {
        const handleKeyDown = e => {
            console.log("keydown event", e);
        };
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };

    }, [])
}





// import { Component } from 'react';

// class AppuseEffectDifferent extends Component {
//     handleKeyDown = e => {
//         console.log("keydown event", e);
//     };

//     componentDidMount() {
//         initThirdPartyLibrary();
//         document.addEventListener("keydown", this.handleKeyDown);
//     };

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.props.value !== this.props.value) {
//             // Do stuff when value prop changes
//         }

//         if (prevState.isLoggedIn !== this.state.isLoggedIn) {
//             // Do stuff when isLoggedIn state changes
//         }

//         if (prevProps.username !== this.props.username) {
//             // Fetch user when username prop changes
//             fetchUser(this.props.username);
//         }
//     };

//     componentWillUnmount() {
//         document.removeEventListener("keydown", this.handleKeyDown);
//     }


//     render() {
//         return ();
//     }
// }

// export { AppuseEffectDifferent };