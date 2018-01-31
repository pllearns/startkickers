import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card } from 'semantic-ui-react';


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
        header: balance,
        meta: 'balance of the campaign',
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
        <h3>Show page</h3>
        {this.renderCards()}
      </Layout>
    )
  }
}

export default CampaignShow