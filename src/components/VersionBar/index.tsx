import React from 'react'
import styled from 'styled-components'
import { Text, Button, HelpIcon, Link } from '@pantherswap-libs/uikit'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.card};
  padding: 16px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 240px;
  }
`

const VersionBar = () => {
  return (
    <Wrapper>
      <Text bold mr="16px">
        Digidex 2021 | by Digichain
      </Text>
      <Button
        variant="subtle"
        as={Link}
        href="https://bscscan.com/token/0x4732a86106064577933552fcea993d30bec950a5#balances"
        endIcon={<HelpIcon color="white" />}
        size="sm"
        ml="16px"
      >
        Token Verifier
      </Button>
    </Wrapper>
  )
}

export default VersionBar
