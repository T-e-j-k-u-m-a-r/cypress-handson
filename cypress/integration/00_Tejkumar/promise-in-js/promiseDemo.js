const p = new Promise(function(resolve, reject) {


    let taskStatus = 'done';

    if (taskStatus === 'done') {
        resolve('Server:: task completed')

    } else {
        reject('Server:: task not completed')
    }


})

p.then(function(result) {
    console.log(result);
    console.log('Client Message: Thank you server');

}).catch(function(error) {
    console.log(error);
    console.log('Client Message: Very bad server');
})