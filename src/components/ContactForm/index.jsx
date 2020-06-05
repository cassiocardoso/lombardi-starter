import React, { PureComponent, Fragment } from 'react'

import config from '../../../lombardi.config'

import {
  FormWrapper,
  FormGroup,
  Label,
  Input,
  Textarea,
  Submit,
  ContentWrapper,
} from './ContactForm.styles'

export class ContactForm extends PureComponent {
  state = {
    status: 'idle',
  }

  submitForm = e => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()

    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) {
        return
      }

      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'success' })
      } else {
        this.setState({ status: 'error' })
      }
    }

    xhr.send(data)
  }

  renderForm = () => {
    const { status } = this.state

    switch (status) {
      case 'idle':
        return (
          <Fragment>
            <h2>Contact</h2>
            <p>Use the form below to send us your message</p>
            <form
              onSubmit={this.submitForm}
              action={`https://formspree.io/${config.formspreeId}`}
              method="POST"
            >
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" />
              </FormGroup>
              <Submit type="submit">Submit</Submit>
            </form>
          </Fragment>
        )
      case 'success':
        return (
          <ContentWrapper>
            <h2>Success</h2>
            <p>Thank you for your message!</p>
            <p>We will get back to you as soon as possible</p>
          </ContentWrapper>
        )
      case 'error':
        return (
          <ContentWrapper>
            <h2>Oops, something went wrong :(</h2>
            <p>We're sorry about that</p>
            <p>Please try again in a few minutes</p>
          </ContentWrapper>
        )
      default:
        return null
    }
  }

  render() {
    return <FormWrapper>{this.renderForm()}</FormWrapper>
  }
}
