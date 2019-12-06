import moment from 'moment-jalaali';
import memoize from 'fast-memoize';
// jalaali week days
export const jWeekdays = [
  'شنبه',
  'یکشنبه',
  'دوشنبه',
  'سه شنبه',
  'چهارشنبه',
  'پنج شنبه',
  'جمعه'
];
// jalaali months
export const jMonths = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند'
];

export const generateMonthDaysArray = memoize(
  (days: number): number[] => {
    const arr = new Array(days);
    for (let index = 0; index < days; index++) {
      arr[index] = index + 1;
    }
    return arr;
  }
);
export const getJDayInMonth = memoize(
  (year: number, month: number): number => {
    // checks month and leap year and return days in month
    if (month <= 6) {
      return 31;
    } else if (month > 6 && month < 12) {
      return 30;
    } else if (month == 12) {
      if (moment.jIsLeapYear(year)) {
        return 30;
      } else {
        return 29;
      }
    } else {
      throw Error('year or month is not valid');
    }
  }
);
export const jToday = () => {
  const today = new moment().format('jYYYY,jM,jD');
  return { jYear: today.jYear, jMonth: today.jMonth, jDay: today.jDay };
};
interface MonthInfo {
  startOfMonth: number;
  jDayInMonth: number;
}

export const jMonthInfo = (year: number, month: number): MonthInfo => {
  /* 
    get jalaali month information like start of of month week day
    to set the first day in calender
    and number of days in month
  */
  let jDayInMonth: number = getJDayInMonth(year, month);
  let jDate = new moment(`${year}/${month}/1`, 'jYYYY/jM/jD');
  let weekDay: number = jDate.day();
  /* day
  calculate the jalaali week day because jDate.day() returns Gregorian, 
  it check if its the last day it returns the first day (saturday) if not it return the current day
  TODO: check if line below is buggy
  */
  let jWeekDay = weekDay == 6 ? 1 : weekDay + 2;
  return { startOfMonth: jWeekDay, jDayInMonth: jDayInMonth };
};
// convert english number to persian number
// export const persianNumber = (enNumber: number): string | 'NaN' => {
//   // TODO: optimize this code, use fonts if available or use objects for o(1)
//   if (typeof enNumber === 'number') {
//     let enNum = enNumber.toString();
//     let persianDigits = '۰۱۲۳۴۵۶۷۸۹';
//     let persianMap = persianDigits.split('');
//     let persian_number = enNum.replace(/\d/g, function(m) {
//       return persianMap[parseInt(m)];
//     });
//     return persian_number;
//   } else {
//     return 'NaN';
//   }
// };
/*
 convert persian number(string) to english number(number) 
*/
// export const englishNumber = persianNumber => {
//   const num_dic = {
//     '۰': '0',
//     '۱': '1',
//     '۲': '2',
//     '۳': '3',
//     '۴': '4',
//     '۵': '5',
//     '۶': '6',
//     '۷': '7',
//     '۸': '8',
//     '۹': '9'
//   };
//   let enNum = persianNumber.replace(/[۰-۹]/g, w => {
//     return num_dic[w];
//   });
//   return parseInt(enNum);
// };
