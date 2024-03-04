import React from 'react'
import Container from './Container'

const Navigation = ({ children }) => {
  return (
    <div className="page">
      <nav>
        <ul>
          <li><a href="#">Главная</a></li>
          <li><a href="#">Помощь</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
      <Container>
        {children}
      </Container>
    </div>
  )
}

export default Navigation