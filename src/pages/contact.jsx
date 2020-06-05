import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import Layout from '../layout'
import { Container } from '../components/Container'
import { ContactForm } from '../components/ContactForm'
import { Map } from '../components/Map'
import { SectionTitle } from '../components/SectionTitle'

const SectionWrapper = styled.section`
  ${tw`text-gray-700 relative mt-12 mb-24 w-full`}
`

const ContentWrapper = styled.div`
  ${tw`container mx-auto flex sm:flex-no-wrap flex-wrap`}
`

const ContactPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Container>
        <SectionWrapper>
          <SectionTitle>Contact Us</SectionTitle>
          <ContentWrapper>
            <Map />
            <ContactForm />
          </ContentWrapper>
        </SectionWrapper>
      </Container>
    </Layout>
  )
}

export default ContactPage
