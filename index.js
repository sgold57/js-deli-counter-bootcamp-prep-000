function takeANumber(katzDeli, name) {
  katzDeli.unshift(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}
