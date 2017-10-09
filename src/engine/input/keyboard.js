const keyboard = keys => {
  window.addEventListener('keydown', e => {
    keys[e.keyCode] = true;
  })

  window.addEventListener('keyup', e => {
    delete keys[e.keyCode]
  })
}

export default keyboard;
