
export const sendSMS = async (req, res) => { 
    try {       
        res.status(200).json({ "sms sent to" : "8893925760"});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const sendWhatsapp = async (req, res) => { 
    try {       
        res.status(200).json({ "whatsapp message sent to" : "8893925760"});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const sendEmail = async (req, res) => { 
    try {       
        res.status(200).json({ "email sent to" : "x@y.com"});
    } catch (error) {
        res.status(404).json({ message: error.message });s
    }
}

export const getHomePage = async (req, res) => { 
    try {       
        res.status(200).json({ "welcome to ": "node app"});
    } catch (error) {
        res.status(404).json({ message: error.message });s
    }
}