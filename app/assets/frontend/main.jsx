import TweetBox from './components/TweetBox'
import TweetsList from './components/TweetsList'

let mockTweets = [
  { id: 1, name: 'Sri Harsha Kappala', body: 'My #First Tweet' },
  { id: 2, name: 'Bay Emmar', body: 'My #Second Tweet' },
  { id: 3, name: 'Harsh', body: 'My #Third Tweet' }
]

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tweetsList: mockTweets };
  }
  addTweet(tweetToAdd) {

  }
  render() {
    return (
      <div className='container'>
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetsList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
