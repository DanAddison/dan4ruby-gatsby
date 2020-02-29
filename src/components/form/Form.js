import styled from 'styled-components'

const Form = styled.form`
  max-width: 100%;
  margin-top: 4em;
  margin-bottom: 4em;

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
`

export default Form