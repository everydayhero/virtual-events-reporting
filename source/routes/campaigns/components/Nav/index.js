import React from 'react'
import { Link } from 'react-router'
import { classes } from '../../../../utils/css'

import styles from './styles'

export default ({
  campaignUid,
  status = 'fetching',
  campaign = {},
  query = {}
}) => (
  <nav className={classes(styles.nav)}>
    <Link
      className={classes(styles.linkLarge)}
      to={{
        pathname: `/campaigns/${campaignUid}`,
        query
      }}>
      {status === 'fetched' ? campaign.name : status}
    </Link>

    <Link
      className={classes(styles.linkBasic)}
      to={{
        pathname: `/campaigns/${campaignUid}/teams`,
        query
      }}>
      Teams
    </Link>

    <Link
      className={classes(styles.linkBasic)}
      to={{
        pathname: `/campaigns/${campaignUid}/individuals`,
        query
      }}>
      Individuals
    </Link>
  </nav>
)

