const { User, UserSchema } = require('./userModel');
const { Category, CategorySchema } = require('./categoryModel');
const { Movie, MovieSchema } = require('./movieModel');
const { Character, CharactersSchema } = require('./characterModel');


function setupModel(sequelize) {
    User.init(UserSchema, User.config(sequelize))
    Category.init(CategorySchema, Category.config(sequelize))
    Movie.init(MovieSchema, Movie.config(sequelize))
    Character.init(CharactersSchema, Character.config(sequelize))

    Category.associate(sequelize.models)
    Movie.associate(sequelize.models)
    Character.associate(sequelize.models)
}

module.exports = setupModel;