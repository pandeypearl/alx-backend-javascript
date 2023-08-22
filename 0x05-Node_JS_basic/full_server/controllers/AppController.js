/**
 * Application Controller
 */
class AppController {
    static getHomepage(request, response) {
        response.statusCode = 200;
        response.send('Holberton School!');
    }
}

export default AppController;