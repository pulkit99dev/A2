module.exports.home = function(req, res){
    //return res.end('Accessing Controller')
    return res.render('home', {
        title : 'Application Home Page'
    });
};