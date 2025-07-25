const User = require('./models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://127.0.0.1:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true });

async function createAdmin() {
    const existingAdmin = await User.findOne({ email: 'amaan@gmail.com' });
    if (existingAdmin) {
        console.log('Admin already exists');
        return mongoose.connection.close();
    }

    const hashedPassword = await bcrypt.hash('7861Amaan', 10);
    const admin = new User({
        name: 'Amaan',
        email: 'amaan@gmail.com',
        password: hashedPassword,
        role: 'admin'
    });

    await admin.save();
    console.log('Admin created successfully');
    mongoose.connection.close();
}

createAdmin();
