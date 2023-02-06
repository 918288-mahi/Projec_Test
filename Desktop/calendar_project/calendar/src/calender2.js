import React from 'react';
import moment from 'moment';
import './calender.css';

export default class Calendar extends React.Component {
    state = {
        dateContext: moment(),
        minDate: moment().subtract(1, 'months'),
        maxDate: moment().add(1, 'months'),
        // ... other state variables
    }

    // ... other methods

    nextMonth = () => {
        // Check if the current date + 1 month is within the min and max range
        if (moment(this.state.dateContext).add(1, 'months').isBetween(this.state.minDate, this.state.maxDate)) {
            let dateContext = Object.assign({}, this.state.dateContext);
            dateContext = moment(dateContext).add(1, 'month');
            this.setState({
                dateContext: dateContext
            });
            this.props.onNextMonth && this.props.onNextMonth();
        }
    }

    prevMonth = () => {
        // Check if the current date - 1 month is within the min and max range
        if (moment(this.state.dateContext).subtract(1, 'months').isBetween(this.state.minDate, this.state.maxDate)) {
            let dateContext = Object.assign({}, this.state.dateContext);
            dateContext = moment(dateContext).subtract(1, 'month');
            this.setState({
                dateContext: dateContext
            });
            this.props.onPrevMonth && this.props.onPrevMonth();
        }
    }

    // ... other methods
}
