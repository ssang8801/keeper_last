import React from "react";

function CreateArea(props) {
  const [state, stateSet] = React.useState({
    title: "",
    body: ""
  });

  function changeHandler(event) {
    const { name, value } = event.target;

    stateSet((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={changeHandler}
          name="title"
          placeholder="Title"
          value={state.title}
        />
        <textarea
          onChange={changeHandler}
          name="body"
          placeholder="Take a note..."
          rows="3"
          value={state.body}
        />
        <button
          onClick={(event) => {
            props.add(state);
            stateSet({ title: "", body: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
