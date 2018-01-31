import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';


class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.returnSummary().call();

    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards () {

    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'address of manager',
        description: 'the creator of the campaign',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'balance of the campaign (ether)',
        description: 'balance left for requests',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: minimumContribution,
        meta: 'minimum contribution',
        description: 'how much to contribute to the campaign',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: requestsCount,
        meta: 'number of requests',
        description: 'how many requests for this campaign',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: approversCount,
        meta: 'number of approvers',
        description: 'number of contributors with approval power',
        style: {overflowWrap: 'break-word'}
      },
    ]

    return <Card.Group items={items} />
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Details</h3>
        <Grid>
          <Grid.Column width={10}>
            {this.renderCards()}
          </Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm />
          </Grid.Column>
        </Grid>
      </Layout>
    )
  }
}

export default CampaignShow