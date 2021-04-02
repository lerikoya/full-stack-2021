#### 1.1: kurssitiedot, step1
_Tässä tehtävässä aloitettavaa ohjelmaa kehitellään eteenpäin muutamassa seuraavassa tehtävässä. Tässä ja kurssin aikana muissakin vastaantulevissa tehtäväsarjoissa ohjelman lopullisen version palauttaminen riittää, voit toki halutessasi tehdä commitin jokaisen tehtävän jälkeisestä tilanteesta, mutta se ei ole välttämätöntä._

Luo create-react-app:illa uusi sovellus. Muuta  _index.js_  muotoon
```js
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
```
ja tiedosto  _App.js_  muotoon

```js
import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
```

ja poista ylimääräiset tiedostot (App.css, App.test.js, logo.svg, reportWebVitals.js, setupTests.js).

Koko sovellus on nyt ikävästi yhdessä komponentissa. Refaktoroi sovelluksen koodi siten, että se koostuu kolmesta uudesta komponentista:  _Header_,  _Content_  ja  _Total_. Kaikki data pidetään edelleen komponentissa  _App_, joka välittää tarpeelliset tiedot kullekin komponentille  _props:ien_  avulla.  _Header_  huolehtii kurssin nimen renderöimisestä,  _Content_  osista ja niiden tehtävämääristä ja  _Total_  tehtävien yhteismäärästä.

Tee uudet komponentit tiedostoon  _App.js_.

Komponentin  _App_  runko tulee olemaan suunnilleen seuraavanlainen:

```js
const App = () => {
  // const-määrittelyt

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}
```
