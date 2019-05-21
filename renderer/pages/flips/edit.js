import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'next/router'
import {Heading, Box} from '../../shared/components'
import CreateFlipMaster from '../../screens/flips/screens/create-flip/components/create-flip-master'
import Layout from '../../components/layout'
import theme from '../../shared/theme'
import {
  getFromLocalStorage,
  FLIP_DRAFTS_STORAGE_KEY,
} from '../../screens/flips/utils/storage'
import {NotificationContext} from '../../shared/providers/notification-provider'

function EditFlip({router}) {
  if (router && router.query) {
    const {id: draftId} = router.query
    const draft = getFromLocalStorage(FLIP_DRAFTS_STORAGE_KEY).find(
      ({id}) => id === draftId
    )

    const {onAddNotification} = useContext(NotificationContext)

    return (
      <Layout>
        <Box p={theme.spacings.large}>
          <Heading>Edit flip</Heading>
          <CreateFlipMaster
            id={draftId}
            {...draft}
            onAddNotification={onAddNotification}
          />
        </Box>
      </Layout>
    )
  }
  return null
}

EditFlip.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  router: PropTypes.object.isRequired,
}

export default withRouter(EditFlip)
