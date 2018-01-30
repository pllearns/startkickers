import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button } from 'semantic-ui-react';

class CampaignNew extends Component {
  render() {
  return (
    <Layout>
      <h3>Create Campaign</h3>
      <Form>
        <Form.Field>
          <label>Minimum Contribution</label>
          <input />
        </Form.Field>
        <Button primary>Create</Button>
      </Form>
    </Layout>
    );
  }
}

export default CampaignNew;