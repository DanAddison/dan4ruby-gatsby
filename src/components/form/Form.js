import styled from 'styled-components'

const Form = styled.form`
  max-width: 100%;
  margin-top: 4em;

  .form__element {
    margin-bottom: 1em;
  }

  label {
    display: block;
    margin-bottom: 1em;
    margin-top: 1em;

    select {
      display: block;
      margin-top: .5em;
      font-size: 1em;
    }
  }

  /* fix safari bug where text does not input despite field having focus */
  input,
  textarea {
    -webkit-user-select: text;
    display: block;
    width: 100%;
    border: 1px solid #ddd;
    padding: 0.5em;
    font-size: 1em;
  }

  textarea {
    min-height: 5em;
  }

  button {
    display: block;
    height: 2em;
    padding: 0 1em;
    color: white;
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-decoration: none;
    white-space: nowrap;
    background: black;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.2s;

    :hover {
      background: blue;
    }
  }
`

export default Form