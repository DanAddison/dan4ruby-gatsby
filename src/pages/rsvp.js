import React from "react"
import { Layout, Article, Form } from "../components"

const RSVPPage = () => (
  <Layout>
    <Article>
      <h1>RSVP</h1>
      <p>If you haven't yet completed this form to officially confirm whether we can expect you, please do so lickety-split.</p>

      <Form
        name="rsvp"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <div className="visuallyHidden">
          <label htmlFor="bot-field">Don’t fill this out if you're human:</label>
          <input name="bot-field" />
        </div>
        <input type="hidden" name="form-name" value="rsvp" />
        <div className="form__element">
          <input type="text" name="name" placeholder="Your Name(s)" required="required"/>
        </div>
        <div className="form__element">
          <input type="email" name="email" placeholder="Your Email" required="required"/>
        </div>
        <div className="form__element">
          <fieldset>
            <label htmlFor="attending[]">Will you be joining us?
              <select name="attending[]" required="required">
                <option value="">-- please choose an option --</option>
                <option value="yes">I will !!</option>
                <option value="no">No, I'm holding out for a better proposal</option>
              </select>
            </label>
          </fieldset>
        </div>
        <div className="form__element">
          <textarea type="text" name="dietary" placeholder="Please let us know if you (or anyone in your party) are veggie, vegan, gluten-free etc." rows="6"></textarea>
        </div>
        <div className="form__element">
          <textarea type="text" name="message" placeholder="If there's anything else you'd like to add, speak now or forever blah blah blah" rows="6"></textarea>
        </div>
        <button className="btn" type="submit">Send</button>
      </Form>

      <p>And don't forget to do this other thing for our amusement:</p>
      <a className="btn" href="https://danieladdison.typeform.com/to/R9aYXt" target="_blank" rel="noopener noreferrer">Take our survey</a>

    </Article>
  </Layout>
)

export default RSVPPage

