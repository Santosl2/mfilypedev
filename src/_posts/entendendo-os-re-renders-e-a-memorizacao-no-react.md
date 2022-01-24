---
title: "Entendendo os re-renders e a memorização no React"
description: "Aqui estão reunidas algumas dicas rápidas para aumentar o desempenho em seu aplicativo React, entendendo a re-renderização e a memorização."
created_at: 1643037464648
---

# Quando o React re-renderiza novamente os componentes?

Geralmente, uma nova renderização é causada por props de um componente ou mudança de estado. Quando um componente renderiza novamente, todos os seus componentes filhos também serão renderizados novamente, a menos que sejam memorizados. (Há exceções, mas isso é principalmente verdade.)

<br/>

---

<br/>

## useRef

[https://reactjs.org/docs/hooks-reference.html#useref](https://reactjs.org/docs/hooks-reference.html#useref)

<br/>

Um erro comum que os desenvolvedores do React cometem é utilizar o useState para cada valor mutável que eles precisam para persistir entre as renderizações (inclusive, antes eu aprender corretamente os hooks, eu mesmo fazia isso).

useState é uma boa solução se a saída renderizada depender do valor, caso contrário useRef seria uma solução mais ideal.

<br/>
<br/>

_Considere o seguinte exemplo:_

```javascript
const [firstName, setFirstName] = useState();

return (
  <form onSubmit={() => alert(firstName)}>
    <input onChange={(e) => { setFirstName(e.target value) }} />
    <button>Submit</button>
  </form>
);
```

<br/>
<br/>

Neste exemplo, toda vez que o usuário digita, o estado firstName é atualizado. Quando um estado é atualizado, uma nova renderização é acionada, o que significa que uma nova renderização está acontecendo toda vez que o usuário digita.

Como firstName não está sendo usado na saída renderizada, podemos substituí-lo por useRef e evitar a nova renderização, resultando neste codigo:

<br/>
<br/>

```javascript
const firstName = useRef();

return (
  <form onSubmit={() => alert(firstName.current)}>
    <input
      onChange={e => {
        firstName.current = e.target.value;
      }}
    />
    <button>Submit</button>
  </form>
);
```

<br/>

---

<br/>

## memo

[https://reactjs.org/docs/react-api.html#reactmemo](https://reactjs.org/docs/react-api.html#reactmemo)

<br/>

Um dos conceitos mais importantes a serem entendidos para otimizar o React é a [memoização](https://en.wikipedia.org/wiki/Memoization).

<br/>

### Sobre memoização

A memoização é o processo de armazenar em cache os resultados de uma função e retornar o cache para solicitações subsequentes.

<br/>
<br/>

### Algoritmo de Reconciliação {#teste}

Re-renderizar um componente significa simplesmente chamar a função do componente novamente. Se esse componente tiver componentes filhos, ele chamará as funções desses componentes e assim por diante até a árvore. Os resultados são então diferidos com o DOM para determinar se a interface do usuário deve ser atualizada. Esse processo de diferenciação é chamado de [reconciliação](https://reactjs.org/docs/reconciliation.html).

<br/>
<br/>

Como os componentes são apenas funções, eles podem ser memorizados usando React.memo(). Isso evita que o componente seja renderizado novamente, a menos que as dependências (props) tenham sido alteradas. Se você tiver um componente particularmente pesado, é melhor memorizá-lo, mas **não memoize todos os componentes.**
_A memoização usa memória e pode ter menos desempenho em certos casos._

<br/>
<br/>

### Como funciona o Algoritmo de Reconciliação?

Quando um componente é memorizado, em vez de renderizá-lo novamente, o React diferencia as novas props do componente com suas props anteriores. A desvantagem que precisa ser considerada aqui é o quão intensivo é comparar os adereços com a execução da função. Se você tiver um objeto grande em seus adereços, pode ser menos eficiente memorizar esse componente.

<br/>

Exemplo:

```javascript
const HeavyComponent: FC = () => {
  return <div />;
};

export const Heavy = React.memo(HeavyComponent);
```

<br/>

---

<br/>

## useCallback

[https://reactjs.org/docs/hooks-reference.html#usecallback](https://reactjs.org/docs/hooks-reference.html#usecallback)

<br/>

Uma ferramenta importante para evitar que componentes memorizados sejam renderizados desnecessariamente é o useCallback.

<br/>

Ao passar uma função para um componente memoizado, você pode remover inadvertidamente o efeito de memorização, não memorizando essa função usando useCallback.

A razão para isso é a igualdade referencial. Como mencionado anteriormente, cada re-renderização chama a função de um componente. Isso significa que se estivermos declarando uma função no componente, uma nova função será criada a cada nova renderização.

Se estivermos passando essa função como um prop para outro componente, mesmo que o conteúdo da função não mude, a referência muda, o que faz com que o componente filho seja renderizado novamente, mesmo que seja memorizado.

<br/>

Exemplo:

```javascript
export const ParentComponent = () => {
  const handleSomething = () => {};

  return <HeavyComponent onSomething={handleSomething} />;
};
```

Neste exemplo, toda vez que o ParentComponent for renderizado novamente, o HeavyComponent também será renderizado novamente, mesmo que seja memorizado. Podemos corrigir isso usando useCallback e impedir que a referência seja alterada.

```javascript
export const ParentComponent = () => {
  const handleSomething = useCallback(() => {}, []);

  return <HeavyComponent onSomething={handleSomething} />;
};
```

_Em breve falarei quando usar o useCallback e quando não utilizar._

<br/>

---

<br/>

## useMemo

[https://reactjs.org/docs/hooks-reference.html#usememo](https://reactjs.org/docs/hooks-reference.html#usememo)

<br/>

Até agora sabemos que cada re-renderização significa que a função do componente está sendo chamada novamente. Isso significa que se sua Função de Componente inclui uma chamada para uma função pesada — essa função pesada está sendo chamada a cada nova renderização.

<br/>

Para evitar executar a função pesada a cada nova renderização, você pode memorizá-la. A primeira renderização chamará a função e as seguintes renderizações retornarão os resultados armazenados em cache da função, em vez de executá-la novamente.

<br/>

Veja:

```javascript
const value = useMemo(() => expensiveFunction(aDep), [aDep]);
```

Em nosso exemplo, o valor será armazenado em cache e atualizado apenas quando aDep for alterada.

<br/>

# Conclusão

Esta publicação foi escrita por _Kolby Sisk_, e traduzida por Matheus Filype.

<br/>
<br/>

Se você quer se aprofundar mais sobre renderizações, [confira o guia completo para renderizações por Mark Erikson's](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/)
