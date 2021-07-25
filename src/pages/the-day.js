import React from "react"
import { Layout, Article, Heading } from "../components"
import {Link} from "gatsby"
import styled from "styled-components"

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1em;
`

const Question = styled.h2`
  margin-bottom: .5em;
  margin-top: 1em;
  font-size: ${props => props.theme.fontSizes[4]};
  color: ${props => props.theme.colors.primary['1']};
  /* font-weight: normal; */
  ::before {
    content: 'Q.';
    padding-right: 1em;
    font-size: 1rem;
  } 
`
const Answer = styled.p`
  margin: .5em 0;
  font-size: ${props => props.theme.fontSizes[3]}; 
  font-weight: bold;
  /* color: ${props => props.theme.colors.primary['2']}; */
  ::before {
    content: 'A.';
    padding-right: 1em;
    font-size: 1rem;
  } 
`
const AnswerBody = styled.div`
margin-bottom: 2em;
  span {
    color: ${props => props.theme.colors.primary['1']};
    font-weight: bold;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    margin-left: 2em;
  }
`

const SecondPage = () => (
  <Layout>
    <Article>
      <Heading>The belated wedding bash</Heading>

      <Question>First things first... Covid?</Question>
      <Answer>Yeah... please do a test</Answer>
      <AnswerBody>
        <p>We think it's a fairly safe bet that the party will go ahead this time. We've scaled down the guest list quite a bit, but there won't be much social distancing going on in the modest factory space. As such we ask that you <em>do not attend without having done a negative lateral flow test</em> on the morning of the event. As most of you will know by now, it's quick, easy and cheap to get test packs sent to your home.</p>
        <p><a href="https://www.gov.uk/order-coronavirus-rapid-lateral-flow-tests" target="_blank" rel="noreferrer">Order a test kit</a></p>
      </AnswerBody>

      <Question>When is it?</Question>
      <Answer>Saturday 4th September 2021</Answer>
      <AnswerBody>
        <p>Better late than never.</p>
      </AnswerBody>

      <Question>Do I need to RSVP again?</Question>
      <Answer>Yes please!</Answer>
      <AnswerBody>
        <p>It'll be a smaller and more casual affair but it is nevertheless very helpful for us to know who is coming in advance. Head here to respond: <Link to={"rsvp"}>RSVP</Link></p>
      </AnswerBody>

      <Question>Where is it?</Question>
      <Answer>The Factory</Answer>
      <AnswerBody>
        <p><a href="http://www.strangecargo.org.uk/">Strange Cargo</a> means a lot to both of us, so we’re thrilled to celebrate with you there. Huge thanks to Brigitte for giving us free rein!</p>
        <p><a href="https://goo.gl/maps/r271nrvBTeWq8SAq7">View map</a></p>
      </AnswerBody>

      <Question>Can I park there?</Question>
      <Answer>No, sorry</Answer>
      <AnswerBody>
        <p>There is no available parking at the factory, and the surrounding streets are often chock-a-block.</p>
      </AnswerBody>

      <Question>What time is it?</Question>
      <Answer>3pm</Answer>
      <AnswerBody>
        <p>You can expect something like this:</p>
        <List>
          <li>Arrive between 2:30-2:45pm</li>
          <li>Some sort of low-key wedding ceremony at 3pm</li>
          <li>Eat and drink and mingle for a while</li>
          <li>Have a boogie</li>
          <li>11pm curfew (it's a quiet residential street)</li>
        </List>
      </AnswerBody>

      <Question>What's the dress code?</Question>
      <Answer>Anything you like</Answer>
      <AnswerBody>
        <p>It's just a party, whatever makes you happy.</p>
      </AnswerBody>

      <Question>What's for tea?</Question>
      <Answer>Big ol' buffet</Answer>
      <AnswerBody>
        <p>We'll have loads of buffet food, largely homemade by kind friends/family, and this should satisfy all dietary requirements. If you fancy chipping in yourself with a dish of some sort, let us know!</p>
      </AnswerBody>

      <Question>What shall I bring?</Question>
      <Answer>A bottle</Answer>
      <AnswerBody>
        <p>We'll be providing some bubbly, wine, beer and soft drinks, but we'll also be stocking up our homemade bar with your contributions as you arrive. You'll be able to drop booze off at the Factory on the day/evening before, if that's easier.</p>
      </AnswerBody>

    </Article>

  </Layout>
)

export default SecondPage
