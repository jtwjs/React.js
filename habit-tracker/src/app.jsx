import { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
        {id: 1, name: "Coding", count: 0},
        {id: 2, name: "Smoking", count: 0},
        {id: 3, name: "Studying", count: 0},
    ],
  };

  habitsMethod = {
    handleIncrement: (habit) => {
      const habits = this.state.habits.map(item => {
        if(item.id === habit.id) {
          return {...habit, count: habit.count + 1}
        }
        return item;
      });
      this.setState({habits});
    },
  
    handleDecrement: (habit) => {
      const habits = this.state.habits.map(item => {
        if(item.id === habit.id) {
          const count = habit.count - 1;
          return {...habit, count: count < 0 ? 0 : count};
        }
        return item;
      });
        this.setState({habits});
    },

    handleDelete: (habit) => {
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits});
    },

    handleAdd: (value) => {
      const habits = [...this.state.habits, {id: Date.now(), name: value, count: 0}];
      this.setState({habits});
    },

    handleReset: () => {
      const habits = this.state.habits.map(habit => {
        if(habit.count !== 0) {
          return {...habit, count: 0};
        }
        return habit;
      })
      this.setState({habits});
    }
  }

  render() {
    const totalCount = this.state.habits.reduce((acc,cur) => {
      return acc + cur.count;
    }, 0);

    return(
      <>
        <Navbar count={totalCount}/>
        <Habits habits={this.state.habits} habitsMethod={this.habitsMethod}/>
      </>
    )
  }
}


export default App;
