{/_Create a component with Label + Text Area -> Label, Values -> DONE!
Create a component with Character Count and Character Limit -> Count, Limit -> DONE!
Create a component with the two Buttons -> Name, Onclick -> 2 functions (Hide and Show Reset Button) -> Tennery
Create a component with the tweets -> Tweet, DateNow() -> Google it
_/}

        {/*<label className="Twitter-label">What's in Your mind?</label>
        <textarea
         className="Text-field"
          placeholder="Type here!"
          onChange={this.handleOnChange}
          value={this.state.tweet}
          />

\*/}

{/_<label className="Twitter-label">What's in Your mind?</label>
<textarea
         className="Text-field"
          placeholder="Type here!"
          onChange={this.handleOnChange}
          value={this.state.tweet}
          />
_/}

//this.setState({tweets})
//}

{/\_ <div className="Twitter-counter" style={{ color: this.state.color }}>
{this.state.charCounter} / {this.state.limit - this.state.charCounter}

</div>
_/}

{/_<button onClick={this.handleOnClick}>Submit!</button>
<button onClick={this.reset}>Reset!</button>
_/}
