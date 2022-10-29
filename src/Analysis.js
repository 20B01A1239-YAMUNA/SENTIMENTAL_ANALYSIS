import React,{Component} from 'react';
import Sentiment from 'sentiment'
import './Analysis.css'
const sentiment = new Sentiment();
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      generalSentiment:null
    }
    this.findSentiment = this.findSentiment.bind(this);
  }
 findSentiment(e){
  const res = sentiment.analyze(e.target.value)
  if(res.score<0){
    this.setState({
      generalSentiment:'Negative'
    })
  }
  else if(res.score>0){
    this.setState({
      generalSentiment:'Positive'
    })
  }
  else{
    this.setState({
      generalSentiment:'Neutral'
  })
 }
}
  render(){
  return (
    <center>
    <div class="analysis-div">
       <h3 class="heading">SENTIMENTAL ANALYSIS</h3>
       <textarea class="textarea"onChange={this.findSentiment}/>
       <p class="para">General Sentiment:{this.state.generalSentiment}</p>
    </div></center>
  );
}
}
export default App;






