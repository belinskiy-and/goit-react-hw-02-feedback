import React, { Component } from "react";
import Box from "./Box";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics"
import Notification from "./Notification";

export class App extends Component {
  // State
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  // Methods
  handleChangeFeedback = e => {    
    const { name } = e.target; 
    
    this.setState(prevState => {
      return {[name]: prevState[name]+1}
    });   
  }

    countTotalFeedback = () => 
      this.state.good + this.state.neutral + this.state.bad;

    countPositiveFeedbackPercentage = () => {
      const countFeedback = this.countTotalFeedback();
      
      if (countFeedback) {
        return Math.round(this.state.good / countFeedback * 100);
      }

      return 0;
    } 

  // Render
  render() {

    const { good, neutral, bad } = this.state;
    const countFeedback = this.countTotalFeedback();

    // console.log(countFeedback);

    return(
      <Box p={4} as="main">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onChange={this.handleChangeFeedback}          
          />
        </Section> 

        <Section title="Statistics">
        {countFeedback === 0 ? 
          <Notification message="There is no feedback" />        
        :
          <Statistics             
            good={good} 
            neutral={neutral}
            bad={bad}
            total={countFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />}
        </Section> 
      </Box>  
    )
  }
}