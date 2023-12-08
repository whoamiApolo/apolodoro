import styled from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  color: ${(props) => props.theme.white};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  font-weight: 100;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme.white};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['start-color']};
  }

  &::placeholder {
    color: ${(props) => props.theme.white};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  font-family: 'Ubuntu Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme.white};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme.black};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme.black};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['stop-color']};
  color: ${(props) => props.theme.white};
  transition: all 1s ease-in-out;

  &:not(:disabled):hover {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme['stop-color']};
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['start-color']};
  color: ${(props) => props.theme.black};
  transition: all 1s ease-in-out;

  &:not(:disabled):hover {
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme['start-color']};
  }
`
