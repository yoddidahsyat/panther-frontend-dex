import React, { useContext, useCallback, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Text } from '@pantherswap-libs/uikit'
// import useENS from '../../hooks/useENS'
// import { useActiveWeb3React } from '../../hooks'
// import { ExternalLink, TYPE } from '../Shared'
import { AutoColumn } from '../Column'
import { RowBetween } from '../Row'
// import { getBscScanLink } from '../../utils'

// const { black: Black } = TYPE

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  width: 100%;
`

const InputPanel = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.invertedContrast};
  z-index: 1;
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

const InputContainer = styled.div`
  flex: 1;
  padding: 0.5rem 1rem;
`

const Input = styled.input<{ error?: boolean }>`
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

const ErrorContainer = styled.div`
  flex: 1;
  padding: 0.3rem 1rem;
`

const Error = styled.div`
  font-size: .8rem;
  color: ${({theme}) => theme.colors.failure};
`
const Title = styled.div`
  color: ${({theme}) => theme.colors.text};
  padding: 0.3rem 0;
`
const Required = styled.span`
  color: red;
`

export default function InputBox({
  id,
  type,
  title,
  name,
  value,
  placeholder,
  errorMessage,
  onChange,
  handleError,
  required,
}: {
  id?: string
  // the typed string value
  type: string
  title?: string
  name: string
  value: any
  placeholder: string
  errorMessage?: string
  // triggers whenever the typed value changes
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleError?: (value: any) => boolean
  required?: boolean
}) {
  // const { chainId } = useActiveWeb3React()
  // const theme = useContext(ThemeContext)

  // const { address, loading, name } = useENS(value)
  const [firstTime, setFirstTime] = useState(true);

  const isRequired = Boolean(required && value.length < 1)
  const isError = !firstTime && ((handleError && Boolean(handleError(value))) || isRequired)

  const handleInput = useCallback(event => {
    // const input = event.target.value
    // const withoutSpaces = input.replace(/\s+/g, '')
    // onChange(withoutSpaces)
    onChange(event)
    setFirstTime(false)
  }, [onChange])
    
        
  const requiredMessage = `${title} is required field`

  return (
    <Container>
      {title && <Title>{title}{required && <Required color='red'>*</Required>}</Title> }
      <InputPanel id={id}>
        <ContainerRow error={isError}>
          <InputContainer>
            <AutoColumn gap="md">
              <Input
                className="recipient-address-input"
                type={type}
                name={name}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                placeholder={placeholder}
                error={isError}
                pattern="^(0x[a-fA-F0-9]{40})$"
                onChange={handleInput}
                value={value}
              />
            </AutoColumn>
          </InputContainer>
        </ContainerRow>
      </InputPanel>
      <ErrorContainer>
        {isError && <Error>{isRequired ? requiredMessage : errorMessage}</Error>}
      </ErrorContainer>
    </Container>
  )
}
