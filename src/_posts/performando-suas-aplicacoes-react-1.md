---
title: "Performando suas aplicações React #1"
description: "Nesta publicação, eu explico um pouco sobre como funciona todo o Fluxo de Renderização do React e sobre o memo."
created_at: 1643137952716
tags: tutorial,react,next
background: "https://i.imgur.com/ndZVmVb.png"
---

O React é uma biblioteca que tem crescido bastante nos últimos meses. Ela por si própria já é bastante perfomática, porém em alguns casos ela poder ser bastante lenta. Nesta publicação eu explico um pouco de como funciona o Fluxo de renderização do React, e sobre um HOC (High-Order Component) do React chamado memo. Sem mais delongas, vamos ao que interessa.

<br/>

Antes de iniciarmos, precisamos entender como funciona o Fluxo de Renderização de um componente React.

O Fluxo de Renderização do React funciona dessa maneira:

1. Ele cria uma nova versão do componente
2. Ele compara essa nova versão com a versão anterior
3. Se houver alteração, ele vai atualizar o que alterou

O nome desse processo é **Reconciliation** (Reconciliação)

<small>

_Vale ressaltar que sempre que o componente Pai atualizar, os componentes filhos passarão pelo Fluxo de Renderização, mesmo que estes não tenham alterações alguma._

</small>

<br/>

# memo

O memo irá basicamente comparar se houve alguma alteração nas propriedades do componente, antes mesmo de chegar no Fluxo de Renderização. Se caso não houver nenhuma alteração, ele irá armazenar esse componente e só voltará a atualiza-lo quando houver alguma alteração nas props.

Imagine que tivessemos um componente filho, que recebesse algumas props, como neste exemplo:

```typescript
interface IProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

export function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}
```

Sem o memo, toda vez que o componente Pai, isto é, o componente onde está chamando o ProductItemComponent, sofrer alguma alteração, o nosso ProductItemComponent passará pelo Fluxo de Renderização independente se houve alteração nas props ou não.

<br/>

Agora, quando usamos o memo por volta do componente, ele passará pelo Fluxo de Renderização apenas se houver alguma alteração nas props.

- Vale ressaltar, que se dentro do componente houver Hooks (useState, useReducer ou useContext) ele ainda será renderizado quando estado ou contexto sofrer alguma alteração.

<br/>

Implementando o memo, ficaria assim:

```typescript
import { memo } from "react";

interface IProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent);
```

<br/>
<br/>

## Shallow Compare

Por padrão, o memo trabalha com o Shallow Compare (Comparação Rasa), isto é, ele irá comparar superficialmente os objetos que estão nas props. Em outras palavras, ele irá utilizar o operador de comparação '===' para fazer esta verificação.

Se você já estudou um pouco mais afundo o Javascript, você sabe que quando comparamos objeto com objeto ({} === {}) o resultado será false, então o memo nesse caso seria inútil, se ele não nos permitisse passar um segundo argumento. Neste segundo argumento, passamos um função que irá dizer se devemos ou não atualizar o componente.

Veja:

```typescript
export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  },
);
```

Neste trecho de código eu estou utilizando o método _is_ para determinar se os dois valores (prevProps.product e nextProps.product) correspondem ao mesmo valor. O retorno dele é um boolean.

<br/>
<br/>

_Nossa aplicação sem memo:_

![React aprendendo a usar o memo](https://imgur.com/QmEJmMA.gif)

<br/>

_Nossa aplicação com memo:_

![React aprendendo a usar o memo](https://imgur.com/6xtA5fA.gif)

<br/>

⚠️ **NÃO USE O MEMO PARA TUDO** ⚠️

Toda funcionalidade do React para perfomance, se for utilizada de forma pré-matura e de forma desnecessária, pode fazer com que o seu componente fique mais lento quando na verdade deveria ficar mais rápido.

Então quando utilizar o memo?

1. Em componentes que renderizam muito
2. Quando o componente re-renderiza muitas vezes com as MESMAS props
3. Em componentes médios ou grandes
4. Pure Functional Componentes

<br/>

# Desfecho

Viu só como é fácil utilizar o memo? Espero que essa dica possa te ajudar a evitar renderizações desnecessárias e conseguir melhores performances em suas aplicações.
