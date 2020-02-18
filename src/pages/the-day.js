import React from "react"
import { Layout, SEO } from "../components"
import styled from "styled-components"
import { color } from 'styled-system'

const ContentWrapper = styled.div`
  max-width: 1000px;
`

const Question = styled.h4`
  ${color}
  margin-bottom: .25em;
`
const Answer = styled.h5`
  margin: .25em 0;
`

const SecondPage = () => (
  <Layout>
    <SEO title="The Day" />
    <ContentWrapper>
      <Question color={'primary'}>Where is it?</Question>
      <Answer>The Factory</Answer>
      <p><a href="http://www.strangecargo.org.uk/">Strange Cargo</a> means a lot to both of us, so we’re thrilled to bits to be saying our vows there. Huge thanks to Brigitte for giving us free rein!</p>
      <Question>Can I park there?</Question>
      <Answer>No</Answer>
      <p>There is no parking at the factory, and the surrounding streets are usually chock-a-block, but since most of us are local I'm sure you'll figure something out.</p>
      <p>For any out-of-towners, Folkestone West station is 5 minutes walk away.</p>
      <Question>What time is it?</Question>
      <Answer>2pm</Answer>
      <p>We think it'll go a little something like this:</p>
      <ul>
        <li>Arrive between 1-1:45pm</li>
        <li>The ceremony will take place at 2pm</li>
        <li>There will be food from about 3pm</li>
        <li>Partying will go on until about 11pm</li>
      </ul>
      <Question>What's the dress code?</Question>
      <Answer>Anything you like. Seriously.</Answer>
      <p>Go ahead and dress up posh if you're up for looking your best in our fancy wedding photos.</p>

      <Question>What's for tea?</Question>
      <Answer>Big ol' buffet</Answer>
      <p>We'll have loads of buffet food, largely homemade by kind friends/family, and this should satisfy all dietary requirements. If you fancy chipping in yourself with a dish of some sort, go nuts!</p>

      <Question>What shall I bring?</Question>
      <Answer>A bottle</Answer>
      <p>We'll be providing some bubbly, wine, beer and soft drinks, but your appetites will likely be far deeper than our pockets. We'll be stocking up our homemade bar up with your contributions as you arrive. You'll also be able to drop booze off at the Factory on the day/evening before, if that's easier.</p>

      <Question color={'primary.900'}>Am I supposed to give you guys a gift?</Question>
      <Answer>No!</Answer>
      <p>We've been encouraging donations to Strange Cargo, to thank them for their hospitality and help them to keep up all the great community work. You can do that on the <a href="/gifting">gifting page ></a></p>
      <p>We have reluctantly (a lie) now bowed to overwhelming pressure and added an extra option for donating straight us, too. So if you feel a burning desire to help flesh out our honeymoon spending budget, you can. You crazy guys.</p>

      <Question>Are we all going to fit inside the factory?</Question>
      <Answer>Good question.</Answer>
      <p>Gonna get cosy! Luckily we're all friends.</p>


    </ContentWrapper>


  </Layout>
)

export default SecondPage
