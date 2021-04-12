import React from "react"
import { Layout, Article, Form } from "../components"

const RSVPPage = () => (
  <Layout>
    <Article>
      <h1>RSVP</h1>
      <p>If you haven't yet completed this form since we rescheduled to September 2021, please do so!</p>

      <Form
        name="rsvp_sept_2021"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <div className="visuallyHidden">
          <label htmlFor="bot-field">Don’t fill this out if you're human:</label>
          <input name="bot-field" />
        </div>
        <input type="hidden" name="form-name" value="rsvp_sept_2021" />
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
                <option value="">-- select --</option>
                <option value="yes">Yes!</option>
                <option value="no">Sorry, can't make it</option>
              </select>
            </label>
          </fieldset>
        </div>
        <button className="btn" type="submit">Send</button>
      </Form>

    </Article>
  </Layout>
)

export default RSVPPage

