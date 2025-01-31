import React, { useContext, useEffect, useMemo, useState } from 'react'
// import { ThemeContext } from 'styled-components'
// import { Pair } from '@pantherswap-libs/sdk'
import { Button, Text} from '@pantherswap-libs/uikit'
import { Link } from 'react-router-dom'
// import CardNav from 'components/CardNav'
// import Question from 'components/QuestionHelper'
import FullPositionCard from 'components/PositionCard'
// import { useTokenBalancesWithLoadingIndicator } from 'state/wallet/hooks'
// import { StyledInternalLink, TYPE } from 'components/Shared'
import { LightCard } from 'components/Card'
// import { RowBetween } from 'components/Row'
import { AutoColumn } from 'components/Column'
// import Column from 'components/Column'
// import Card from 'components/Card'
// import InputBox from 'components/InputBox'
// import SelectBox from 'components/SelectBox'

// import { useActiveWeb3React } from 'hooks'
// import { usePairs } from 'data/Reserves'
// import { toV2LiquidityToken, useTrackedTokenPairs } from 'state/user/hooks'
// import { Dots } from 'components/swap/styleds'
// import TranslatedText from 'components/TranslatedText'
// import { TranslateString } from 'utils/translateTextHelpers'
// import PageHeader from 'components/PageHeader'
// import AppBody from '../AppBody'

// import Standard from './Standard'
// const { body: Body } = TYPE

const Home = () => {

  return (
    <>
      <LightCard padding='2rem 3rem'>
        <AutoColumn gap='lg' justify='center'>
          <Text fontSize='2rem' style={{ textAlign: 'center' }}>THE LAUNCHPAD PROTOCOL FOR CRYPTO ENTHUSIAST</Text>
          <Text style={{textAlign: 'center'}} >DigiLaunchpad come to help everyone to create their own tokens, lock LP in few seconds. The purpose of DigiLaunchpad is to reduce fraud from scam projects. Future Launchpad to making safe everyone in crypto world. But remember to still DYOR!</Text>
          <Button as={Link} to="/token/create">Create Now</Button>
        </AutoColumn>
      </LightCard>
    </>
  )
}

export default Home