
export const sendSMS = async (req, res) => { 
    try {       
        res.status(200).send( "sms sent to 8893925760" );
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const sendWhatsapp = async (req, res) => { 
    try {       
        res.status(200).send("whatsapp message sent to 8893925760" );
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const sendEmail = async (req, res) => { 
    try {       
        res.status(200).send("email sent to x@y.com");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const HomePage = async (req, res) => { 
    try {       
        res.status(200).send('<div>welcome to node app </div> <a href="/auth/google">Authenticate with Google</a>');
    } catch (error) {
        res.status(404).json({ message: error.message });s
    }
}

export const protectedRoute = async (req, res) => { 
    try {       
        res.status(200).send(`<div>Hello ${req.user.displayName}</div>
                              <div><a href="/sendsms">send SMS</a></div>
                              <div><a href="/sendwhatsapp">send whatsapp message</a></div>
                              <div><a href="/sendemail">send email</a></div>
                              <div><a href="/logout">logout</a></div>`);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const authFailure = async (req, res) => { 
    try {       
        res.status(200).send('Failed to authenticate..');
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const logout = async (req, res) => { 
    try {       
        req.logout();
        req.session.destroy();
        res.send('<div>Goodbye!</div><div><a href="/">go to home page </a></div>');
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}