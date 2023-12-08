import { HeaderContainer } from './styles'

import logoTomate from '../../assets/tomate.jpeg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoTomate}
        alt="Logo colorida e animada. Um tomate vermelho brilhante como elemento central, representando o temporizador pomodoro"
      />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
