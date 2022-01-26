const AuthorController = require('../controllers/product.controller');
module.exports = function(app){
    app.post('/addAuthors', AuthorController.createAuthor);
    app.get('/showAuthors', AuthorController.showAllAuthors);
    app.get('/showOneAuthor/:id', AuthorController.showOneAuthor);
    app.delete('/delete/:id', AuthorController.removeAuthor);
    app.put('/update/:id', AuthorController.updateAuthor);
    
}