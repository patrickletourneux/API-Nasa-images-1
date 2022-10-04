export const addDaysToDateString = (dateString: string, days: number):string => {

    const date= new Date(dateString);
    date.setDate(date.getDate() + days)

    const year = date.getFullYear().toString();
    const month = (date.getMonth()+1).toString().padStart(2, '0');
    const day = (date.getDate()).toString().padStart(2, '0');

    const newDateString = `${year}-${month}-${day}`
    // console.log('newDateString:', newDateString)

    return newDateString
}