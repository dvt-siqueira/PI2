const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
console.log(keys);

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        console.log(action);
        if (!action) {
            console.log('number key!')
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            key.classList.add('is-depressed')
            console.log('operator key!')
        }
        if (action === 'decimal') {
            console.log('decimal key!')
        }

        if (action === 'clear') {
            console.log('clear key!')
        }

        if (action === 'calculate') {
            console.log('equal key!')
        }
    }
});

const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        if (!action) {
            if (!action) {
                if (displayedNum === '0') {
                    display.textContent = keyContent
                } else {
                    display.textContent = displayedNum + keyContent
                }
            }
        }
        // Não fazer nada se a string já tiver um ponto
        if (!displayedNum.includes('.')) {
            display.textContent = displayedNum + '.'
        }
    }
    const getKeyType = (key) => {
  const { action } = key.dataset
  if (!action) return 'number'
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) return 'operator'
  // Para todo o resto, retorne a ação (action)
  console.log(action);
  return action
}

})