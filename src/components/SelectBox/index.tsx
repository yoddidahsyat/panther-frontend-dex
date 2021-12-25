import React, { useContext, useCallback, ReactNode } from 'react'
import styled, { ThemeContext } from 'styled-components'
// import useENS from '../../hooks/useENS'
// import { useActiveWeb3React } from '../../hooks'
// import { ExternalLink, TYPE } from '../Shared'
import { AutoColumn } from '../Column'
// import { RowBetween } from '../Row'
// import { getBscScanLink } from '../../utils'

// const { black: Black } = TYPE

const SelectPanel = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.invertedContrast};
  z-index: 1;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  width: 100%;
`

const ContainerRow = styled.div<{ error: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  border: 1px solid ${({ error, theme }) => (error ? theme.colors.failure : theme.colors.invertedContrast)};
  transition: border-color 300ms ${({ error }) => (error ? 'step-end' : 'step-start')},
    color 500ms ${({ error }) => (error ? 'step-end' : 'step-start')};
  background-color: ${({ theme }) => theme.colors.invertedContrast};
`

const SelectContainer = styled.div`
  flex: 1;
  padding: 0.5rem 1rem;
`

const Select = styled.select<{ error?: boolean }>`
  font-size: 1rem;
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  background-color: ${({ theme }) => theme.colors.invertedContrast};
  transition: color 300ms ${({ error }) => (error ? 'step-end' : 'step-start')};
  color: ${({ error, theme }) => (error ? theme.colors.failure : theme.colors.primary)};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  width: 100%;
  ::placeholder {
    color: ${({ theme }) => theme.colors.textDisabled};
  }
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.textDisabled};
  }
`

const Title = styled.div`
  color: ${({theme}) => theme.colors.text};
  padding: 0.3rem 0;
`

export default function SelectBox({
  id,
  name,
  title,
  value,
  onChange,
  children
}: {
  id?: string
  // the typed string value
  name: string
  value: string
  title?: string
  // triggers whenever the typed value changes
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  children: ReactNode
}) {
  // const { chainId } = useActiveWeb3React()
  // const theme = useContext(ThemeContext)

  // const { address, loading, name } = useENS(value)

  const handleSelect = useCallback(
    (event) => {
    //   const input = event.target.value
      // const withoutSpaces = input.replace(/\s+/g, '')
      // onChange(withoutSpaces)
      onChange(event)
    },
    [onChange]
  )

  // const error = Boolean(value.length > 0 && !loading && !address)
  const error = Boolean(value.length < 1)


  return (
    <Container>
      {title && <Title>{title}</Title> }
      <SelectPanel id={id}>
        <ContainerRow error={error}>
          <SelectContainer>
            <AutoColumn gap="md">
              <Select
                className="recipient-address-input"
                name={name}
                error={error}
                onChange={handleSelect}
                value={value}
              >
                  {children}
              </Select>
            </AutoColumn>
          </SelectContainer>
        </ContainerRow>
      </SelectPanel>
    </Container>
  )
}