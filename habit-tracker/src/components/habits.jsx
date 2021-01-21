
import React, { Component } from 'react';
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {

    handleReset = () => {
        this.props.habitsMethod.handleReset();
    }

    render() {
        return (
            <div className="habits">
                <HabitAddForm onAdd={this.props.habitsMethod.handleAdd}/>
                <ul>    
                    {
                        this.props.habits.map(habit => 
                            <Habit
                            key={habit.id} 
                            habit={habit}
                            onIncrement={this.props.habitsMethod.handleIncrement}
                            onDecrement={this.props.habitsMethod.handleDecrement}
                            onDelete={this.props.habitsMethod.handleDelete}
                            />
                            )
                    }
                </ul>
                <button className="habits-reset" onClick={this.handleReset}>Reset All</button>
            </div>
        );
    }
}

export default Habits;