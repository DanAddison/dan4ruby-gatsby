import React from "react"
import { Layout, SEO, Article, Heading } from "../components"
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
    background: ${props => props.theme.colors.secondary};
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
    <SEO title="Gifting" description="Well, if you must!" />
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

      <h2>For Ruby & Dan</h2>
      <p>A few of you lovely lot seem really keen to help us with our honeymoon spending budget, too! Who are we to deny you the opportunity to buy us a drink in Slovenia?</p>

      <StyledPaypal action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="styled_paypal">
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="business" value="G2R68UJDM3NFN" />
        <input type="hidden" name="item_name" value="Honeymoon Fund" />
        <input type="hidden" name="currency_code" value="GBP" />
        <input type="image" src="" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <span>Donate</span>
      </StyledPaypal>

    </Article>
  </Layout>
)

export default GiftingPage

