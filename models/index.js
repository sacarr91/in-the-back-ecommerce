// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Tag belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'ProductTag'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: 'ProductTag'
}),

  module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
  };
