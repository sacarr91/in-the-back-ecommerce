# In-The-Back

In-The-Back is an e-commerce backend for managing retail inventory.

## Demo


## Installation

After forking this repo, use `npm` to install application dependencies.

```bash
npm i
```

## Available actions

```bash
# Run seed file to load example data
npm run seed
```
> **Note:**   
> Preface *all* routes with `/api`

| route| action| input (JSON)| returns (JSON)|
| -------- | --------- | --------------- | ------------ |
| **GET**  |   |||
| /categories  | get all categories  || [array of categories]<br> id, category_name, array of products in category (product id, product_name, price, stock, category_id) |
| /categories/:id  | get specific category by id || {category object}<br> id, category_name, array of products in category (product id, product_name, price, stock, category_id) |
| /products| get all products|| [array of products]<br> id, product_name, price, stock, category_id, object of category information (product id, category_name), array of related tags |
| /products/:id| get specific product by id  || {product object}<br> id, product_name, price, stock, category_id, object of category information (product id, category_name), array of related tags|
| /tags| get all tags|| [array of tags]<br> id, tag_name, array of related products|
| /tags/:id| get specific tag by id  ||{tag object}<br> id, tag_name, array of related products |
| **POST** |   |||
| /categories  | create new category | **required:** category_name | {posted new category}<br> id, category_name object|
| /products| create new product  | **required:** product_name, price <br><br> ***optional:*** <br>  stock *(defaults to 10 if not entered)*, category_id |{posted new product}<br> id, product_name, price, stock, category_id |
| /tags| create new tag  | **required:** tag_name  <br><br>***optional:***| {posted new tag}<br> id, tag_name   |
| **UPDATE** (PUT) |   |||
| /categories/:id  | update a category (by id)   |field to be updated|number of rows updated|
| /products/:id| update a product (by id)|field to be updated|number of rows updated|
| /tags/:id| update a tag (by id)|field to be updated|number of rows updated|
| **DELETE**   |   |||
| /categories/:id  | delete a category (by id)   ||number of rows deleted|
| /products/:id| delete a product (by id)||number of rows deleted|
| /tags/:id| delete a tag (by id)||number of rows deleted|

## Contributing

Feel free to fork this repository to adapt for your own purposes.  
...Unless you're also a bootcamp student, in which case that would be cheating.