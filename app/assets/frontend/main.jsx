import TweetBox from './components/TweetBox'
import TweetsList from './components/TweetsList'

let mockTweets = [
  { id: 1, name: 'Sri Harsha Kappala', body: 'My #First Tweet' },
  { id: 2, name: 'Bay Emmar', body: 'My #Second Tweet' },
  { id: 3, name: 'Harsh', body: 'My #Third Tweet' }
]

class Main extends React.Component {
  render() {
    return (
      <div className='container'>
        <TweetBox />
        <TweetsList tweets={mockTweets} />
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
