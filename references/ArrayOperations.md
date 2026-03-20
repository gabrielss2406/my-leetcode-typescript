# Operações com Arrays em JavaScript

---

## Adicionar Elementos

### push() — adiciona no fim
```js
arr = [1, 2]
arr.push(3)
// [1, 2, 3]
```

### unshift() — adiciona no início
```js
arr = [1, 2]
arr.unshift(0)
// [0, 1, 2]
```

### splice() — adiciona em qualquer posição
```js
// splice(índice, quantosRemover, elemento)
arr = [1, 2]
arr.splice(1, 0, 99)
// [1, 99, 2]
```

### spread (...) — combina arrays
```js
arr1 = [1, 2]
arr2 = [3, 4]
arr3 = [...arr1, ...arr2]
// [1, 2, 3, 4]
```

---

## Remover Elementos

### pop() — remove o último
```js
arr = [1, 2, 3]
arr.pop()
// [1, 2]
```

### shift() — remove o primeiro
```js
arr = [1, 2, 3]
arr.shift()
// [2, 3]
```

### splice() — remove em qualquer posição
```js
// splice(índice, quantosRemover)
arr = [1, 2, 3]
arr.splice(1, 1)
// [1, 3]
```

### filter() — remove por valor (retorna novo array)
```js
arr = [1, 2, 3]
novo = arr.filter(x => x !== 2)
// [1, 3]
```

---

## Buscar / Encontrar

### indexOf() — retorna o índice da primeira ocorrência
```js
arr = [10, 20, 30]
arr.indexOf(20)
// 1
arr.indexOf(99)
// -1
```

### includes() — verifica se o valor existe
```js
arr = [10, 20, 30]
arr.includes(20)
// true
arr.includes(99)
// false
```

### find() — retorna o primeiro elemento que satisfaz a condição
```js
arr = [1, 2, 3, 4]
arr.find(x => x > 2)
// 3
```

### findIndex() — retorna o índice do primeiro elemento que satisfaz a condição
```js
arr = [1, 2, 3, 4]
arr.findIndex(x => x > 2)
// 2
```

---

## Transformar

### map() — transforma cada elemento (retorna novo array)
```js
arr = [1, 2, 3]
novo = arr.map(x => x * 2)
// [2, 4, 6]
```

### filter() — filtra elementos por condição (retorna novo array)
```js
arr = [1, 2, 3, 4]
novo = arr.filter(x => x % 2 === 0)
// [2, 4]
```

### reduce() — reduz o array a um único valor
```js
arr = [1, 2, 3, 4]
total = arr.reduce((acumulador, x) => acumulador + x, 0)
// 10
```

---

## Ordenar

### sort() — ordena o array (modifica o original)
```js
// strings
arr = ["banana", "apple", "cherry"]
arr.sort()
// ["apple", "banana", "cherry"]

// números (precisa de comparador)
arr = [10, 1, 5]
arr.sort((a, b) => a - b)  // crescente
// [1, 5, 10]

arr.sort((a, b) => b - a)  // decrescente
// [10, 5, 1]
```

### reverse() — inverte a ordem (modifica o original)
```js
arr = [1, 2, 3]
arr.reverse()
// [3, 2, 1]
```

---

## Outros

### flat() — achata arrays aninhados
```js
arr = [1, [2, 3], [4, [5]]]
arr.flat()
// [1, 2, 3, 4, [5]]

arr.flat(2)  // nível de profundidade
// [1, 2, 3, 4, 5]
```

### spread (...) — copia ou combina arrays
```js
original = [1, 2, 3]
copia = [...original]
// [1, 2, 3] (novo array, sem referência)

combinado = [...original, 4, 5]
// [1, 2, 3, 4, 5]
```

### forEach() — itera sem retornar novo array
```js
arr = [1, 2, 3]
arr.forEach(x => console.log(x))
// 1
// 2
// 3
```

### slice() — retorna parte do array (não modifica o original)
```js
arr = [1, 2, 3, 4, 5]
arr.slice(1, 3)
// [2, 3]

arr.slice(-2)
// [4, 5]
```