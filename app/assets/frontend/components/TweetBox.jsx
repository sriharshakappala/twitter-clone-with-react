export default class TweetBox extends React.Component {
  render() {
    return (
      <div className='row'>
        <form>
          <br />
          <div className='input-field'>
            <label>What's happening?</label>
            <textarea className='materialize-textarea' />
            <button className='btn right'>Tweet</button>
          </div>
        </form>
      </div>
    )
  }

}
