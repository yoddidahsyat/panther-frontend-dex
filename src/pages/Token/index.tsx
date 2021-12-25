import React, { useContext, useEffect, useMemo, useState } from 'react'
// import { ThemeContext } from 'styled-components'
// import { Pair } from '@pantherswap-libs/sdk'
import { Button, CardBody, Text, Flex } from '@pantherswap-libs/uikit'
// import { Link } from 'react-router-dom'
// import CardNav from 'components/CardNav'
// import Question from 'components/QuestionHelper'
// import FullPositionCard from 'components/PositionCard'
// import { useTokenBalancesWithLoadingIndicator } from 'state/wallet/hooks'
// import { StyledInternalLink, TYPE } from 'components/Shared'
// import { LightCard } from 'components/Card'
import { RowBetween } from 'components/Row'
import { AutoColumn } from 'components/Column'
// import Column from 'components/Column'
// import Card from 'components/Card'
// import InputBox from 'components/InputBox'
import SelectBox from 'components/SelectBox'

// import { useActiveWeb3React } from 'hooks'
// import { usePairs } from 'data/Reserves'
// import { toV2LiquidityToken, useTrackedTokenPairs } from 'state/user/hooks'
// import { Dots } from 'components/swap/styleds'
// import TranslatedText from 'components/TranslatedText'
// import { TranslateString } from 'utils/translateTextHelpers'
import PageHeader from 'components/PageHeader'
import AppBody from '../AppBody'

import Standard from './Standard'
// const { body: Body } = TYPE

const Token = () => {
  // const [firstTime, setFirstTime] = useState(true);
  const [type, setType] = useState('standard')
  // const [value, setValue] = useState('')
  
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value)
  }

  // const handleError = (value: string) => {
  //   console.log(value)
  //   return value.length < 1
  // }

  // useEffect(() => {
  //   console.log(form)
  // }, [form])

  return (
    <AppBody>
      <AutoColumn gap='sm' style={{ width: '100%', padding: '1rem' }}>
        <Text color='red' fontSize='.7rem'>(*) is required field</Text>
        <RowBetween padding='1rem 0'>
          <AutoColumn gap='.25rem' style={{ width: '100%'}}>
            <SelectBox id='tokenType' name='type' title='Token Type' value={type} onChange={handleOnChange}>
              <option value="standard">Standard Token</option>
              <option value="liquid">Liquidity Generator Token</option>
              <option value="baby">Baby Token</option>
              <option value="buyback">Buyback Baby Token</option>
            </SelectBox>
            <Text color='textSubtle' fontSize='.7rem'>Fee: 0.2 BNB</Text>
          </AutoColumn>
        </RowBetween>
        {type === 'standard' && <Standard />}
      </AutoColumn>
    </AppBody>
  )
}

export default Token