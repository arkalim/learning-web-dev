try {
    // Try to run this
    func();

} catch (error) {
    // If the above block throws error, catch the error and display
    console.log(error);
    console.log('Error Message: ' + error.message);

} finally {
    // Irrespective of whether error occurred or not, this block will be run
    console.log('Finally..!!')
}