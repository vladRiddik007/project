import React, { Component } from "react";

export default class ItemStatusFilter extends Component {
  buttons = [
    this.createButtons("all"),
    this.createButtons("active"),
    this.createButtons("done")
  ];

  createButtons(name) {
    return {
      name,
      label: name.charAt(0).toUpperCase() + name.slice(1)
    };
  }

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActiv = filter === name;

      const clazz = isActiv ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          type="button"
          className={`btn ${clazz}`}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
