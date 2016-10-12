class Main extends React.Component {
  render() {
    return (
      <h1>Hello from first Component</h1>
    )
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
