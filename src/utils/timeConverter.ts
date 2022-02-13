export const secondToDay = (second: number): number => {
   const minute: number = second / 60;
   const hour: number = minute / 60;
   const day: number = Math.ceil(hour / 24);

   return day;
}