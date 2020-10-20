import React, {Component} from "react";
import API from "../../utils/API";
import Game from '../../components/Game';




class Profile extends Component {

    state = {
        loggedIn: false,
        user: null,
        loading: true,
    }

    componentDidMount() {

        this.loading();

        API.isLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user
                }, () =>{
                    API.getUserGames(this.state.user._id).then(
                        res => this.setState({
                            user: res.data
                        })
                    ).catch(err => console.log(err))
                });
            }
            console.log(this.state.user.gameArray);
        }).catch(err => {
            console.log(err);
        });

        // console.log(this.props)
    }

    loading() {
        setTimeout(()=> {
            this.setState({
                loading: false
            })
        }, 1000)  
    }

    render() {
        return (
            <Game />
        )
    }
}


export default Profile;