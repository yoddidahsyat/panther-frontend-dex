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
import { AutoRow, RowBetween } from 'components/Row'
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

const Standard = () => {

  // const [error, setError] = useState(true)

  const [form, setForm] = useState({
    type: 'standard',
    name: '',
    symbol: '',
    decimal: '',
    supply: ''
  })
  
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const nameError = (value: string) => {
    return value.length < 2
  }
  
  const symbolError = (value: string) => {
    return value.length < 2
  }
  
  const decimalError = (value: number) => {
    return value < 2 || value > 64
  }

  const handleSubmit = () => {
    console.log(form)
  }

  return (
    <>
      <RowBetween>
        <InputBox id='tokenName' type='text' name='name' title='Name' value={form.name} placeholder='ex: Ethereum' onChange={handleOnChange}
            handleError={nameError} errorMessage='Name must be at least 2 characters' required />
      </RowBetween>
      <RowBetween>
        <InputBox id='tokenSymbol' type='text' name='symbol' title='Symbol' value={form.symbol} placeholder='ex: ETH' onChange={handleOnChange}
            handleError={symbolError} errorMessage='Symbol must be at least 2 characters' required />
      </RowBetween>
      <RowBetween>
        <InputBox id='tokenDecimal' type='number' name='decimal' title='Decimal' value={form.decimal} placeholder='ex: 18' onChange={handleOnChange}
            handleError={decimalError} errorMessage='Decimal must be greater than or equals to 2 and less than or equals to 64' required />
      </RowBetween>
      <RowBetween>
        <InputBox id='tokenTotalSupply' type='number' name='supply' title='Total Supply' value={form.supply} placeholder='ex: 10000000' onChange={handleOnChange}
            required/>
      </RowBetween>
            
      <AutoColumn justify='center'>
        <Button id="create-token" onClick={handleSubmit} >Create Token</Button>
      </AutoColumn>
    </>
  )
}

export default Standard