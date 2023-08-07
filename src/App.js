import './App.css';
import React from 'react';
import UserItem from './components/UserItem';
import UserAddForm from './components/UserAddForm';


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      background: '#FFFFFF',
      textColor: '#000000'
    };
  }

  handleBackgroundChange(event) {
    const userBackground = event.target.value;

    this.setState({ background: userBackground });
  }

  handleTextColorChange(event) {
    const userTextColor = event.target.value;

    this.setState({ textColor: userTextColor })
  }

  render() {

    return (
      <div className="App" style={{ background: this.state.background, color: this.state.textColor }}>
        <h1>Lista Utilizatori</h1>

        <UserItem 
          name='Mohamed Salah' 
          email='mohamed.salah@gmail.com' 
          salary= '4500'
          image= 'https://semantic-ui.com/images/avatar2/large/elyse.png'
        />
        <UserItem 
          name='Roberto Firmino' 
          email='roberto.firmino@gmail.com' 
          salary= '6000'
          image= 'https://semantic-ui.com/images/avatar2/large/elyse.png'
        />

        <UserItem 
          name= 'Celentano Baurel'
          email= 'celentano.baurel@gmail.com'
          salary= '9000'
          image= 'https://semantic-ui.com/images/avatar2/large/elyse.png'
        />

        <input type="color" defaultValue="#FFFFFF" onChange={ (event) => this.handleBackgroundChange(event) }/>

        <UserAddForm />

        <input type="color" defaultValue="#000000" onChange={ (event) => this.handleTextColorChange(event) }/>

      </div>
    )
  }
}

export default App;
