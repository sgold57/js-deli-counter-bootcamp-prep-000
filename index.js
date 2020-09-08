function takeANumber(katzDeli, name) {
  katzDeli.unshift(name)
  return `Welcome ${name}. You are number ${katzDeli[name].index + 1} in line.`
}
