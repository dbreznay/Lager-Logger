import React, {Component} from "react";
import { Link } from "react-router-dom"
import API from "../../utils/API"


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
            <StyledContainer className="profilePage">
                {this.state.loggedIn ? (
                    <div className="profileBox">
                        <h1 id="userTitle">Welcome {this.state.user.username}</h1>
                        
                        
                        { this.state.user.gameArray.map(game => {
                            return (
                                    <a key = {game._id} href={`/play/${game._id}`}>
                                        <GameButton>
                                            <img src="https://i.pinimg.com/originals/79/4b/06/794b064076875b743c533b0c8b070fe3.jpg" alt="Card cap" class="sc-jTzLTM cVlYDB card-img"/>
                                            {game.gameName}
                                        </GameButton>
                                    </a>
                                );
                                })}
                    
                        <h2>High Scores: {this.state.user.highscores}</h2>
                        <ul>
                            <li>Circle of Death</li>
                        </ul>
                    </div>
                ) : (
                    <div className="noUser">
                        {!this.state.loading ? (
                            <>
                                <h1>PLEASE LOG IN</h1>
                                <Link className="loginLink" to="/login"><FormButton className="loginBtn" color="info" >Login</FormButton></Link>
                            </>
                        ) : (
                            <p>Loading</p>
                        )}
                    </div> 
                )}
            </StyledContainer>
        )
    }
}


export default Profile;