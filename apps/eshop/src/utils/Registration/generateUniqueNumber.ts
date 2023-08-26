export const generateUniqueNumber = () => {
  const timestamp = new Date().getTime() // Get current timestamp in milliseconds
  const randomNumber = Math.floor(Math.random() * 1000) // Generate a random number between 0 and 999
  const uniqueNumber = timestamp + randomNumber // Combine timestamp and random number
  return uniqueNumber
}
