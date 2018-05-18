/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];


for (let day of days) {
  // capitalizes the first letter of the day
  day = day[0].toUpperCase() + day.substring(1);
  console.log(day);
}