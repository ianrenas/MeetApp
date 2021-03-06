import React, { Component } from "react";

class Event extends Component {
  state = {
    event: {},
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <p className="start-date">{event.start.dateTime} ({event.start.timeZone})</p>
        <br />
        <p className="location">@{event.summary} | {event.location}</p>

        {!collapsed &&
          <div className={`extra-details ${this.state.collapsed ? "hide" : "show"}`}>
            <h3>About Event</h3>
            <a href={event.htmlLink} target='_blank' rel='noreferrer'>
              See details on Google calendar
            </a>
            <p className="event-description">{event.description}</p>

          </div>
        }
        <button className={`${collapsed ? "show" : "hide"}-details-btn`} onClick={this.handleClick}>
          {collapsed ? "Show Details" : "Hide Details"}
        </button>
      </div>
    );
  }
}

export default Event;