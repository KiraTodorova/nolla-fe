import React, { Component } from "react";
import AnalogClock from "analog-clock-react";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { LabelAndTextArea } from "./Components/LabelAndTextArea";
import { CharacterCounter } from "./Components/CharacterCount";
import { SubmitAndResetButtons } from "./Components/CreateAndResetButtons";
import { Tweet } from "./Components/Tweet";
import { Paragraph1 } from "./Components/Paragraph1";
import { Paragraph2 } from "./Components/Paragraph2";
import { Paragraph3 } from "./Components/Paragraph3";
import { Gif1 } from "./Components/AnimationGIF1";
import { Paragraph4 } from "./Components/Paragraph4";
import "./App.css";

const tweets = [
  {
    twt_id: 8,
    created_twt: "2022-03-10T17:50:28.896376",
    content_twt:
      "I am testing my Tweeter app in Postman!!                                                                                                                                                                ",
  },
  {
    twt_id: 7,
    created_twt: "2022-03-10T17:23:10.560077",
    content_twt:
      "I am testing my Tweeter app in Postman!!                                                                                                                                                                ",
  },
];

const tweet1_content =
  "I am trying my super awesome tweet function, behold Java and React! Here comes Kira!";
const tweet2_content =
  "Someone told a person: -Don't take it personally! You can better than that!- And I am quite sure that person did took it personally, this world is just bonkers at times. This is a tweet so don't mind me ^^'";
const tweet3_content =
  "I dunno what to say anymore, its just a tweet, so deal with it! >:3";

const tweet1_date = "7/3/2021";
const tweet2_date = "24/12/2020";
const tweet3_date = "4/3/2021";

const GET_TWEETS_URL = "http://localhost:8080/fetchTweet";
const POST_TWEETS_URL = "http://localhost:8080/saveTweet";
const DELETE_TWEET_URL = "http://localhost:8080/deleteTweet";
const LIKE_TWEET_URL = "http://localhost:8080/likeTweet";

/*selenium = () => {
return this.selenium;
};*/

class App extends Component {
  state = {
    tweet: "",
    tweets: [],
    charCounter: 0,
    limit: 250,
    color: "#83F57F",
  };

  updateClock = () => {
    let ausTime = new Date().toLocaleString("en-US", {
      timeZone: "Australia/Brisbane",
    });
    let date = new Date(ausTime);

    this.setState({
      options: {
        ...this.state.options,
        seconds: date.getSeconds(),
        minutes: date.getMinutes(),
        hours: date.getHours(),
      },
    });
  };

  formatDate(dateString) {
    const d = new Date(dateString);
    let year = d.getFullYear();
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let date = [year, month, day].join("-");
    let time = [hours, minutes].join(":");
    return [date, time].join("   ");
  }

  handleOnChange = ({ target }) => {
    const { value } = target;
    let color = "#83F57F";
    if (this.state.charCounter > this.state.limit - 1) {
      this.setState({
        color: "red",
      });
      alert("Warning! Maximum characters avaliable exceeded!");
    } else if (this.state.charCounter > this.state.limit / 2 - 1) {
      this.setState({
        color: "yellow",
        tweet: value,
        charCounter: value.length,
      });
    } else
      this.setState({
        tweet: value,
        charCounter: value.length,
        color: "green",
      });
  };

  handleOnClick = () => {
    alert(this.state.tweet);
  };
  handleReset = () => {
    this.setState({
      tweet: "",
      charCounter: 0,
    });
  };

  componentDidMount() {
    fetch(GET_TWEETS_URL, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => this.setState({ tweets: res }))
      .catch((error) => console.log("error", error));
  }

  postATweet = () => {
    fetch(POST_TWEETS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/text" },
      body: this.state.tweet,
    })
      .then((res) => {
        if (res.ok) {
          this.setState({
            tweets: [...{ content_twt: this.state.tweet }, this.state.tweets],
          });
          this.handleReset();
        } else {
          this.handleReset();
        }
      })

      .catch((error) => this.handleReset());
  };

  deleteTweet = (id) => {
    fetch(DELETE_TWEET_URL + "/" + id, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then((response) => {
        if (response.ok)
          this.setState({
            tweets: this.state.tweets.filter((tweet) => tweet.twt_id !== id),
          });
        else alert("There is an error ");
      })
      .catch(() => alert("There is an error"));
  };

  likeTweet = (id) => {
    fetch(LIKE_TWEET_URL + "/" + id, {
      method: "PUT",
    })
      .then((res) => {
        console.log("res ....", res);
        if (res.ok) {
          console.log("ok ....", res);
          const likedTweet = this.state.tweets.find(
            (tweet) => tweet.twt_id === id
          );
          likedTweet.likes_num = likedTweet.likes_num + 1;
          this.setState({ tweets: this.state.tweets });
        } else alert("There is an error ");
      })
      .catch(() => alert("There is an error"));
  };

  render() {
    return (
      <div className="Main-design-body">
        <div>
          <AnalogClock
            clock={(this.interval = setInterval(this.updateClock, 1000))}
          />
        </div>
        <Header name="ADA's Communication Center" />
        <Paragraph1 paragraph={this.paragraph} />

        <LabelAndTextArea
          labelValue="What did You find?"
          onChange={this.handleOnChange}
          textValue={this.state.tweet}
        />
        <br />

        <CharacterCounter
          counter={this.state.charCounter}
          limit={this.state.limit}
          color={this.handleOnChange}
        />

        <SubmitAndResetButtons
          submitLabel="Submit"
          resetLabel="Reset"
          handleSubmit={this.postATweet}
          handleReset={this.handleReset}
        />
        <div>
          <Paragraph2 paragraph={this.paragraph} />
        </div>

        <div>
          <Paragraph3 paragraph={this.paragraph} />
          {this.state.tweets.map((tweet, index) => (
            <Tweet
              key={index}
              tweet={tweet.content_twt}
              likes={tweet.twt_like}
              handleDelete={() => this.deleteTweet(tweet.twt_id)}
              handleLike={() => this.likeTweet(tweet.twt_id)}
              date={this.formatDate(tweet.created_twt)}
            />
          ))}
          <div>
            <Paragraph4 />
          </div>

          <div>
            <Gif1 className="Gif1" gif={this.gif} />
          </div>
        </div>

        <Footer copyright={"Copyrighted by "} company={"Mc Fluffn' Burgers."} />
      </div>
    );
  }
}
export default App;
