import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../../shared/theme'
import {Box} from '../../../shared/components'
import {Figure} from '../../../shared/components/utils'

export function NetProfile({
  addr,
  balance,
  age,
  state: status,
  nextValidation,
  validationRunning,
  onToggleActivateInvite,
  canActivateInvite,
}) {
  return (
    <Box bg={theme.colors.gray} p="1em" css={{borderRadius: '4px'}}>
      <Figure label="Address" value={addr} />
      <Figure
        label="Status"
        value={status}
        postfix={
          canActivateInvite ? (
            <button type="button" onClick={onToggleActivateInvite}>
              Activate
            </button>
          ) : null
        }
      />
      <Figure label="Stake" value={balance.stake} postfix="DNA" />
      <Figure label="Balance" value={balance.balance} postfix="DNA" />
      <Figure label="Age" value={age} postfix="epochs" />
      <Figure
        label="Next validation"
        value={
          validationRunning
            ? 'TBD...'
            : new Date(nextValidation).toLocaleString()
        }
      />
    </Box>
  )
}

const balanceShape = {stake: PropTypes.string, balance: PropTypes.string}

NetProfile.propTypes = {
  addr: PropTypes.string.isRequired,
  balance: PropTypes.shape(balanceShape).isRequired,
  age: PropTypes.number,
  state: PropTypes.string,
  nextValidation: PropTypes.string,
  validationRunning: PropTypes.bool,
  canActivateInvite: PropTypes.bool,
  onToggleActivateInvite: PropTypes.func,
}

export default React.memo(NetProfile)