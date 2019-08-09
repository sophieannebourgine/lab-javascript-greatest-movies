/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage (movies){
    var sum = movies.reduce((accumulator, currMovie) => {
         accumulator = accumulator + Number(currMovie.rate)
        return accumulator
    },0);
    let avg=(sum/movies.length).toFixed(2) 
    return Number(avg)
}



 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    var dramaMovies=movies.filter((movies) => {
        return movies.genre == "Drama"
    });
    if (dramaMovies.length == 0) {
        return 0

    //     var sum=dramaMovies.reduce((accumulator, currDramaMovie) => {
    //         accumulator = accumulator + Number(currDramaMovie.rate)
    //         return accumulator
    //     },0);
    //     return Number((sum/dramaMovies.length).toFixed(2));
    }
    else {
        return ratesAverage (dramaMovies)
    }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
var moviesDuration=movies.sort((movie1,movie2) => {
    // if (movie1.duration === movie2.duration) {
    //     return moviesDuration.sort(moviesDuration.title)
    //     }    
 return movie1.duration - movie2.duration
});
console.log(moviesDuration)
return moviesDuration.sort()
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    var dramaSpielberg =  dramaMovies.filter((director)=>{
        
    })
    // var dramaMoviesSpielberg=movies.filter((movies) => {
    //     return movies.genre === "Drama" && movies.director === "Steven Spielberg"
    // });
    console.log(dramaMoviesSpielberg)
    var sum = dramaMoviesSpielberg.reduce((accumulator, currMovie) => {
        accumulator += Number(currMovie)
       return accumulator
   },0);
        return sum
        
        
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function turnHoursToMinutes (){

}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function bestYearAvg () {

}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
