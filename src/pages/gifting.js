import React from "react"
import { Layout, Article, Heading } from "../components"
import styled from 'styled-components';

const StyledPaypal = styled.form`
    position: relative;
    display: inline-block;
    margin-bottom: 2em;
    overflow: hidden;
    border-radius: 5px;
    padding: .7em 1.4em;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: .15em;
    text-transform: uppercase;
    transition: all .2s;
    background: ${props => props.theme.colors.primary['1']};
    color: ${props => props.theme.colors.white};
    &:hover {
      background: ${props => props.theme.colors.primary['2']};
    }
    input {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
    }
`


const GiftingPage = () => (
  <Layout>
    <Article>
      <Heading mt={0}>Gifting</Heading>
      <h2>For Strange Cargo</h2>
      <p>We are encouraging donations to Strange Cargo, to thank them for their hospitality and help them to keep up all the great community work.</p>

      <StyledPaypal action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="business" value="info@strangecargo.org.uk" />
        <input type="hidden" name="currency_code" value="GBP" />
        <input type="image" src="" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <span>Donate</span>
      </StyledPaypal>

      {/* <h2>For Ruby & Dan</h2>
      <p>We put a button here last year to collect a few quid towards our Slovenian honeymoon that never was. We were going to remove it this time around but hey, if you're generous to a fault, who are we to stop you from buying us a drink!</p>

      <StyledPaypal action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="styled_paypal">
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="business" value="rubybolton28@gmail.com" />
        <input type="hidden" name="item_name" value="Our honeymoon fund" />
        <input type="hidden" name="currency_code" value="GBP" />
        <input type="image" src="" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <span>Donate</span>
      </StyledPaypal> */}

    </Article>
  </Layout>
)

export default GiftingPage

