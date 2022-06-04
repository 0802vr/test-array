const courses = [
  { name: 'Courses in England', prices: [null, 100] },
  { name: 'Courses in Germany', prices: [500, 999] },
  { name: 'Courses in Italy', prices: [100, 200] },
  { name: 'Courses in Russia', prices: [null, 400] },
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in USA', prices: [200, 999] },
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in France', prices: [null, 999] },
];

// Варианты цен (фильтры), которые ищет пользователь
const buy1 = [null, 200];
const buy2 = [100, 350];
const buy3 = [200, 999];

function findCourses (arr, buy){
arr.forEach(function(element)
{ 
  if (buy[0] > element.prices[1]) {
      
    return console.log( `Эти курсы не потянем: ${element.name}! `)
} 
if (buy[1] < element.prices[0]) {
      
  return console.log( `Эти курсы не потянем: ${element.name}! `)
} 
   else if (element.prices[0] <= buy[0] || buy[1] <= element.prices[1] || buy[0] == element.prices[1]) {
    
        return console.log( `Эти курсы подходят: ${element.name}! `)
    } 
   
    return console.log(`Эти курсы не потянем: ${element.name}!`)
})
}
//составлены 2 исключения и остальные условия должны быть true
//findCourses (courses, buy1)
//findCourses (courses, buy2)
//findCourses (courses, buy3)


//2 сортировка перебор массива методом с указанием на свойства массива
courses.sort((prev, next) => prev.prices[0] - next.prices[0]);
//console.log(courses);