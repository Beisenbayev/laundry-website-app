export const secondToDay = (second) => {
   const minute = second / 60;
   const hour = minute / 60;
   const day = Math.ceil(hour / 24);

   return day;
}