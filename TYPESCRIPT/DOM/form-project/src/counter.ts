export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `<h1>count is ${counter}</h1>`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
