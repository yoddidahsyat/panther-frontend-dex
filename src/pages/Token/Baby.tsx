import React, { useContext, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from 'styled-components'
// import { Pair } from '@pantherswap-libs/sdk'
import { Button, CardBody, Text } from '@pantherswap-libs/uikit'
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
import InputBox from 'components/InputBox'
// import SelectBox from 'components/SelectBox'

// import { useActiveWeb3React } from 'hooks'
// import { usePairs } from 'data/Reserves'
// import { toV2LiquidityToken, useTrackedTokenPairs } from 'state/user/hooks'
// import { Dots } from 'components/swap/styleds'
// import TranslatedText from 'components/TranslatedText'
// import { TranslateString } from 'utils/translateTextHelpers'
// import PageHeader from 'components/PageHeader'
// import AppBody from '../AppBody'

// const { body: Body } = TYPE

const Baby = () => {
  const theme = useContext(ThemeContext)

  const [form, setForm] = useState({
    type: 'standard',
    name: '',
    symbol: '',
    decimal: 0,
    supply: 0
  })
  // const [value, setValue] = useState('')
  
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const nameError = (value: string) => {
    // console.log(value)
    return value.length > 6
  }

  // useEffect(() => {
  //   console.log(form)
  // }, [form])

  const handleSubmit = () => {
    console.log(form)
  }

  return (
    <>
      <RowBetween>
        <Text color={theme.colors.text}>
          
        </Text>
        <InputBox id='tokenName' type='text' name='name' value={form.name} placeholder='placeholder' onChange={handleOnChange}
            handleError={nameError} errorMessage='error' />
      </RowBetween>
      <RowBetween>
        <InputBox id='tokenSymbol' type='text' name='symbol' value={form.symbol} placeholder='placeholder' onChange={handleOnChange}
            handleError={nameError} errorMessage='error' />
      </RowBetween>
      <RowBetween>
        <InputBox id='tokenDecimals' type='number' name='decimal' value={form.decimal} placeholder='placeholder' onChange={handleOnChange}
            handleError={nameError} errorMessage='error' />
      </RowBetween>
      <RowBetween>
        <InputBox id='tokenTotalSupply' type='number' name='supply' value={form.supply} placeholder='placeholder' onChange={handleOnChange}
            handleError={nameError} errorMessage='error' />
      </RowBetween>
            
      <RowBetween>
        <Button id="create-token" onClick={handleSubmit} > Create Token </Button>
      </RowBetween>
    </>
  )
}

export default Baby