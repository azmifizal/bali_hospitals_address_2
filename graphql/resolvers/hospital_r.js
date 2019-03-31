module.exports = async (req, res) => {
    if (!req.auth) {
        return new Error('Not Allowed!');
    }

    try {
        const result = await Hospital.find();
        return result;
    } catch (err) {
        throw err;
    }
}