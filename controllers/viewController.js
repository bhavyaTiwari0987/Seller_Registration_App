exports.signupPage = (req, res)=> {
   return res.render('signup' , {
    title: 'Product-List-App | Signup'
   })
}
exports.loginPage = (req, res)=> {
    return res.render('login' , {
        title: 'Product-List-App | Login'
       })
}
exports.homePage = (req, res)=> {
    return res.render('home' , {
        title: 'Product-List-App | Home'
       })
}
exports.dashboardPage = (req, res)=> {
    return res.render('dashboard' , {
        title: 'Product-List-App | Dashboard'
       })
}
