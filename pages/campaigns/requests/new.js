import React, { Component } from 'react';
import { Form, Message, Button, Input } from 'semantic-ui-react';
import { Campaign } from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout'

class RequestNew extends Component {
  
  state = {
    value: '',
    description: '',
    recipient: '',
    errMessage: ''
  }
  static async getInitialProps(props) {
    const { address } = props.query

    return { address };
  }

  render() {
    return (
      <Layout>
        <Form onSubmit={this.onSubmit} error={!!this.state.errMessage}>
          <Form.Field>
            <label>Description</label>
            <Input 
              value={this.state.description}
              onChange={event => this.setState({description: event.target.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Value</label>
            <Input 
              value={this.state.value}
              onChange={event => this.setState({value: event.target.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Recipient</label>
            <Input
              value={this.state.recipient}
              onChange={event => this.setState({recipient: event.target.value})} 
            />
          </Form.Field>
        </Form>
      </Layout>
    )
  }
}

export default RequestNew;