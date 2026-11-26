const model = require('../models/usersModel');
const postsModel = require('../models/postsModel');

exports.oneForm = (req, res) => {
    if(req.session.prihlasenyUzivatel) {
        return res.redirect('/users/profile');
    }
    res.render('users', {
        titulek: 'Uživatelský účet',
    });
}

exports.loginForm = (req, res) => {
    if(req.session.prihlasenyUzivatel) {
        return res.redirect('/users/profile');
    }

    res.render('login', {
        titulek: 'Přihlášení',
    });
}

exports.registerForm = (req, res) => {
    if(req.session.prihlasenyUzivatel) {
        return res.redirect('/users/profile');
    }

    res.render('register', {
        titulek: 'Registrace',
    });
}

exports.login = (req, res) => {
    const jmeno = typeof req.body.jmeno === 'string' ? req.body.jmeno.trim() : '';
    const heslo = typeof req.body.heslo === 'string' ? req.body.heslo : '';

    if(!jmeno || !heslo || !model.spravneHeslo(jmeno, heslo)) {
        return res.status(401).render('login', {
            titulek: 'Přihlášení',
            chyba: 'Neplatné jméno nebo heslo.',
        });
    }

    req.session.prihlasenyUzivatel = jmeno;
    res.redirect('/users/profile');
}

exports.register = (req, res) => {
    const jmeno = typeof req.body.jmeno === 'string' ? req.body.jmeno.trim() : '';
    const heslo = typeof req.body.heslo === 'string' ? req.body.heslo : '';

    if(!jmeno || !heslo) {
        return res.status(400).render('register', {
            titulek: 'Registrace',
            chyba: 'Vyplňte jméno i heslo.',
        });
    }

    if(!model.pridatUzivatele(jmeno, heslo)) {
        return res.status(409).render('register', {
            titulek: 'Registrace',
            chyba: 'Uživatel s tímto jménem už existuje.',
        });
    }

    req.session.prihlasenyUzivatel = jmeno;
    res.redirect('/users/profile');
}

exports.profile = (req, res) => {
    if(!req.session.prihlasenyUzivatel) {
        return res.redirect('/users');
    }

    res.render('profile', {
        titulek: req.session.prihlasenyUzivatel + ' - profil',
        prihlasenyUzivatel: req.session.prihlasenyUzivatel,
    });
}

exports.getOut = (req, res) => {
    req.session.destroy();
    res.redirect('/users');
}

exports.deleteAccount = (req, res) => {
    const jmeno = req.session.prihlasenyUzivatel;

    if(!jmeno) {
        return res.redirect('/users');
    }

    postsModel.smazatPrispevkyAutora(jmeno);
    model.smazatUzivatele(jmeno);
    req.session.destroy();
    res.redirect('/users');
}