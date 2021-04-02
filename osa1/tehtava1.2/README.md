#### 1.2: kurssitiedot, step2

Refaktoroi vielä komponentti  _Content_  siten, että se ei itse renderöi yhdenkään osan nimeä eikä sen tehtävälukumäärää vaan ainoastaan kolme  _Part_-nimistä komponenttia, joista kukin siis renderöi yhden osan nimen ja tehtävämäärän.

```js
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```
