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
      <Heading>The Day</Heading>

      <Question>When is it?</Question>
      <Answer>Saturday, April 17th, 2021</Answer>
      <AnswerBody>
        <p>Yes, that's right, Coronavirus threw a spanner in the works. We've had to postpone almost a full year, to April 2021.</p>
        <p>We're just going to have to party even harder!</p>
      </AnswerBody>

      <Question>Do I need to RSVP again?</Question>
      <Answer>Yes please!</Answer>
      <AnswerBody>
        <p>At some point between now and then, if you could RSVP to confirm your attendence on the new date, that would be grand.</p>
        <p>What may seem like an unnecessary formality is actually very helpful for us. Head here to respond: <Link to={"rsvp"}>RSVP</Link></p>
      </AnswerBody>


      <Question>Where is it?</Question>
      <Answer>The Factory</Answer>
      <AnswerBody>
        <p><a href="http://www.strangecargo.org.uk/">Strange Cargo</a> means a lot to both of us, so we’re thrilled to bits to be saying our vows there. Huge thanks to Brigitte for giving us free rein!</p>
        <p><a href="https://goo.gl/maps/r271nrvBTeWq8SAq7">View map</a></p>
      </AnswerBody>

      <Question>Can I park there?</Question>
      <Answer>No, sorry</Answer>
      <AnswerBody>
        <p>There is no available parking at the factory, and the surrounding streets are usually chock-a-block.</p>
      </AnswerBody>

      <Question>What time is it?</Question>
      <Answer>2pm</Answer>
      <AnswerBody>
        <p>Keep an eye on this website close to the time, as we'll update it with any details as they become clearer. But we think it'll go a little something like this:</p>
        <List>
          <li>Arrive between 1-1:45pm</li>
          <li>The ceremony will take place at 2pm</li>
          <li>There will be food from about 3pm</li>
          <li>Partying will go on until about 11pm</li>
        </List>
      </AnswerBody>

      <Question>What's the dress code?</Question>
      <Answer>Anything you like</Answer>
      <AnswerBody>
        <p>But hey, it's a wedding so you might fancy the opportunity to dress up posh... we do have a fancy photographer after all.</p>
      </AnswerBody>

      <Question>What's for tea?</Question>
      <Answer>Big ol' buffet</Answer>
      <AnswerBody>
        <p>We'll have loads of buffet food, largely homemade by kind friends/family, and this should satisfy all dietary requirements. If you fancy chipping in yourself with a dish of some sort, let us know!</p>
      </AnswerBody>

      <Question>What shall I bring?</Question>
      <Answer>A bottle</Answer>
      <AnswerBody>
        <p>We'll be providing some bubbly, wine, beer and soft drinks, but your appetites will be far deeper than our pockets. We'll be stocking up our homemade bar with your contributions as you arrive. You'll also be able to drop booze off at the Factory on the day/evening before, if that's easier.</p>
        <p>Just to reiterate, as this is arguably the most crucial piece of info on this site: <span>bring booze!!</span></p>
      </AnswerBody>

      <Question>Are we all going to fit inside the factory?</Question>
      <Answer>Good question</Answer>
      <AnswerBody>
        <p>It's gonna get cosy! Luckily we're all friends.</p>
      </AnswerBody>

    </Article>

  </Layout>
)

export default SecondPage
