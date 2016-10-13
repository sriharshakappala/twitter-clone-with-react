export default class TweetsList extends React.Component {
  render() {
    return (
      <div>
        <ul className='collection'>
          <li className='collection-item avatar'>
            <i className="material-icons circle">person_pin</i>
            <span className="title">Sri Harsha Kappala</span>
            <p>My #First tweet</p>
          </li>
          <li className='collection-item avatar'>
            <i className="material-icons circle">person_pin</i>
            <span className="title">Sri Harsha Kappala</span>
            <p>My #Second tweet</p>
          </li>
          <li className='collection-item avatar'>
            <i className="material-icons circle">person_pin</i>
            <span className="title">Sri Harsha Kappala</span>
            <p>My #Third tweet</p>
          </li>
        </ul>
      </div>
    )
  }
}
