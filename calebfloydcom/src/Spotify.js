import React, { Component } from 'react';

class Spotify extends Component {

  constructor(props) {
      super(props);
      this.state = {title: undefined, artists: {}, time: {}};
  }

  componentDidMount() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
        e = e.target;
        if (e.readyState === 4 && e.status === 200) {
            let res;
            try {
                res = JSON.parse(e.response);
            } catch(err) {
                return;
            }
            let song = res.items[0].track.name;
            let playedAt = res.items[0].played_at;
            let artistsa = res.items[0].track.artists;
            this.setState({
                    title: song,
                    artists: artistsa,
                    time: playedAt
            });
         }
    };
    request.open("GET", "/recentlyPlayed/api/recentlyPlayed");
    request.send();
  }

  render() {
    if(!this.state.title) {
        return (<p className="spotify">I haven't listened to any jams recently, check back later!</p>)
    }
    let song = this.state.title;
    let artist = this.state.artists[0].name;
    if(20 < this.state.title.length) {
        song = song.slice(0, 20) + "..."
    }
    let timeString = "long ago";
    let now = new Date();
    let listenedAt = new Date(this.state.time);
    let deltaSeconds = (now - listenedAt) / 1000;
    let deltaMinutes = Math.floor(deltaSeconds / 60);
    let deltaHours = Math.floor(deltaSeconds / 3600);
    if(deltaHours < 1) {
        if(deltaMinutes < 1) {
            timeString = "right now";
        }
        else if(deltaMinutes === 1) {
            timeString = deltaMinutes + " minute ago";
        } else {
            timeString = deltaMinutes + " minutes ago";
        }
    } else if (deltaHours === 1){
        timeString = deltaHours + " hour ago";
    } else {
        timeString = deltaHours + " hours ago";
    }
    return (
        <p className="spotify">I listened to {song} by <em className="spotify">{artist}</em>, {timeString}.</p>
    );
  }
}

export default Spotify;